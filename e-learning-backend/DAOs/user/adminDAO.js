const UserDAO = require("./userDAO");
const { User: UserModel} = require('../../models/user/UserModel');

class AdminDAO extends UserDAO {
    async deleteUser(email) {
        return await UserModel.deleteOne({ email });
    }
    
}

module.exports = AdminDAO;
