const DashboardDAO = require('../../DAOs/dashboard/dashboardDAO');

/* 
Controller To Get User, Course and Contact Stats
*/

class DashboardController {
    constructor() {
        this.dashboardDAO = new DashboardDAO();
        this.getContactStats = this.getContactStats.bind(this);
        this.getCourseStats = this.getCourseStats.bind(this);
        this.getUserStats = this.getUserStats.bind(this);
    }

    async getUserStats(req, res) {
        try {
            const data = await this.dashboardDAO.getUserStats();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching user stats:', error);
            res.status(500).json({ error: 'Failed to fetch user stats', details: error.message });
        }
    }

    async getCourseStats(req, res) {
        try {
            const data = await this.dashboardDAO.getCourseStats();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching course stats:', error);
            res.status(500).json({ error: 'Failed to fetch course stats', details: error.message });
        }
    }

    async getContactStats(req, res) {
        try {
            const data = await this.dashboardDAO.getContactStats();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching contact stats:', error);
            res.status(500).json({ error: 'Failed to fetch contact stats', details: error.message });
        }
    }
}

module.exports = new DashboardController();