const UserController = require("./userController");

/*
Controller Contain Admin Extra Operations
*/
class AdminController extends UserController {
    constructor() {
        super();
        this.deleteUser = this.deleteUser.bind(this);
    }

    async deleteUser(req, res) {
        const { email } = req.params;
        try {
            const result = await this.adminDAO.deleteUser(email);
            res.status(result.deletedCount ? 200 : 404).json({ message: result.deletedCount ? 'User deleted' : 'User not found' });
        } catch (error) {
            console.error("Delete User Error: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = AdminController;
