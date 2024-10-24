const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserDAO, ClientDAO, AdminDAO, StudentDAO, TeacherDAO } = require("../../DAOs/user");

/*
Controller Aim To Manage All Users Common Operations
*/

class UserController {
    constructor() {
        this.userDAO = new UserDAO();
        this.adminDAO = new AdminDAO();
        this.studentDAO = new StudentDAO();
        this.teacherDAO = new TeacherDAO();
        this.clientDAO = new ClientDAO();

        this.login = this.login.bind(this);
        this.refreshToken = this.refreshToken.bind(this);
        this.logout = this.logout.bind(this);
    }

    
    async login(req, res) {
        const { email, password } = req.body;
    
        try {
            const user = await this.userDAO.findUserByEmail(email);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Wrong password" });
            }
    
            const accessToken = jwt.sign({ id: user.userID }, process.env.ACCESS_SECRET, { expiresIn: "15m" });
            const refreshToken = jwt.sign({ id: user.userID }, process.env.REFRESH_SECRET, { expiresIn: "7d" });            
            await this.userDAO.updateUserRefreshToken(user.userID, refreshToken);
            
            return res.status(200).json({ accessToken, refreshToken, user });
        } catch (error) {
            console.error("Login Error: ", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    
    async refreshToken(req, res) {
        const { refreshToken } = req.body;
        
        if (!refreshToken) {
            return res.sendStatus(401);
        }
        try {
            const user = await this.userDAO.findUserByRefreshToken(refreshToken);
            if (!user) {
                return res.sendStatus(403);
            }
            jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, userData) => {
                if (err) {
                    return res.sendStatus(403);
                }    
                const newAccessToken = jwt.sign({ id: user.userID }, process.env.ACCESS_SECRET, { expiresIn: "15m" });
                return res.json({ accessToken: newAccessToken });
            });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    
    async logout(req, res) {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.sendStatus(401);
        }
        try {
            const user = await this.userDAO.findUserByRefreshToken(refreshToken);
            if (!user) {
                return res.sendStatus(403);
            }
            await this.userDAO.removeUserRefreshToken(user.userID);
            res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
    
        
        }
    }
}

module.exports = UserController;
