const { User: UserModel, Admin, Student, Teacher } = require('../../models/user/UserModel');

class UserDAO {
    async findUserByEmail(email) {
        return await UserModel.findOne({ email });
    }

    async findUserByName(name) {
        return await UserModel.findOne({ name });
    }

    async createUser(userData) {
        let user;
        if (userData.role === 'Student') {
            user = new Student(userData);
        } else if (userData.role === 'Teacher') {
            user = new Teacher(userData);
        } else {
            user = new Admin(userData);
        }
        return await user.save();
    }

    async updateUserRefreshToken(userId, refreshToken) {
        return await UserModel.findOneAndUpdate(
            { userID: userId },
            { refreshToken },
            { new: true }
        );
    }

    async findUserByRefreshToken(refreshToken) {
        return await UserModel.findOne({ refreshToken });
    }

    async removeUserRefreshToken(userId) {
        return await UserModel.findOneAndUpdate(
            { userID: userId },
            { refreshToken: null },
            { new: true }
        );
    }
}

module.exports = UserDAO;
