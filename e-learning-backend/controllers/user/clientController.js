const UserController = require("./userController");
const bcrypt = require("bcrypt");

class ClientController extends UserController {
    constructor() {
        super();
        this.register = this.register.bind(this);
        this.editPersonalData = this.editPersonalData.bind(this);
    }

    async register(req, res) {
        const { name, password, email, role } = req.body;
        const image = req.file ? req.file.path : 'user_uploads/defaultProfile.png';

        try {
            const userExists = await this.clientDAO.findUserByEmail(email);
            if (userExists) {
                return res.status(409).json({ message: "User already registered" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            await this.userDAO.createUser({ name, email, password: hashedPassword, role, image });

            res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            console.error('Error registering user:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async editPersonalData(req, res) {
        const { userId, changedData } = req.body;
        try {
            const user = await this.clientDAO.editPersonalData(userId, changedData);
            res.status(200).json(user);
        } catch (error) {
            console.error("Edit Personal Data Error: ", error);
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ClientController;
