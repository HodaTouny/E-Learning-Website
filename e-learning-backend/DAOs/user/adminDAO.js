const UserDAO = require("./userDAO");

class AdminDAO extends UserDAO {
    async deleteUser(email) {
        return await this.UserModel.deleteOne({ email });
    }
}

module.exports = AdminDAO;
