const UserDAO = require("./userDAO");
const { User: UserModel } = require('../../models/user/UserModel');

class ClientDAO extends UserDAO {
    async editPersonalData(userId, changedData) {
        const user = await UserModel.findOne({ userID: userId });
        if (!user) throw new Error('User not found');
        if (user.role === 'Admin') throw new Error('Admins cannot edit their own profile');
        Object.keys(changedData).forEach(key => {
            if (user[key] !== undefined && key !== 'userID') {
                user[key] = changedData[key];
            }
        });
        return await user.save();
    }
}

module.exports = ClientDAO;
