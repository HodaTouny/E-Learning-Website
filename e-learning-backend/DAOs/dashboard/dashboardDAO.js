// DAOs/dashboard/dashboardDAO.js
const { User } = require('../../models/user/UserModel');
const Course = require('../../models/course/CourseModel');
const Contact = require('../../models/contact/contactModel');

const courseModelInstance = new Course();
const CourseModel = courseModelInstance.getModel();

class DashboardDAO {
    constructor() {
        this.getContactStats = this.getContactStats.bind(this);
        this.getCourseStats = this.getCourseStats.bind(this);
        this.getUserStats = this.getUserStats.bind(this);
    }

    async getUserStats() {
        try {
            const totalUsers = await User.countDocuments(); // Total number of users
            const usersByRole = await User.aggregate([
                { $group: { _id: "$role", count: { $sum: 1 } } }
            ]);

            const registrationsOverTime = await User.aggregate([
                {
                    $group: {
                        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
                        count: { $sum: 1 }
                    }
                },
                { $sort: { "_id.year": 1, "_id.month": 1 } }
            ]);

            return { totalUsers, usersByRole, registrationsOverTime };
        } catch (error) {
            throw new Error('Error fetching user stats');
        }
    }

    async getCourseStats() {
        try {
            const totalCourses = await CourseModel.countDocuments(); // Total number of courses
            const coursesByCategory = await CourseModel.aggregate([
                { 
                    $group: { 
                        _id: "$category", 
                        premiumCourses: { $sum: { $cond: ['$isPremium', 1, 0] } }, 
                        freeCourses: { $sum: { $cond: ['$isPremium', 0, 1] } } 
                    } 
                }
            ]);    
            return { totalCourses, coursesByCategory };
        } catch (error) {
            throw new Error('Error fetching course stats');
        }
    }
    

    async getContactStats() {
        try {
            const totalSubscribers = await Contact.countDocuments(); 
            const usersWithAccount = await Contact.countDocuments({ hasAccount: true });
            const emailSubscribers = totalSubscribers - usersWithAccount; 

            return { totalSubscribers, usersWithAccount, emailSubscribers };
        } catch (error) {
            throw new Error('Error fetching contact stats');
        }
    }
}

module.exports = DashboardDAO;
