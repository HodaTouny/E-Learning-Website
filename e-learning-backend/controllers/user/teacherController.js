const ClientController = require("./clientController");

/*
Controller Contain Teacher Extra Operations 
*/

class TeacherController extends ClientController {
    constructor() {
        super();
        this.addCourse = this.addCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.addBalance = this.addBalance.bind(this);
        this.getAllTeachers = this.getAllTeachers.bind(this);
    }

    async addCourse(req, res) {
        const { courseId, teacherID } = req.body;
        try {
            const result = await this.teacherDAO.addCourse(courseId, teacherID);
            res.status(200).json({ message: 'Course added successfully', result });
        } catch (error) {
            if (error.message === 'Teacher not found') {
                res.status(404).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An error occurred', error: error.message });
            }
        }
    }

    async deleteCourse(req, res) {
        const { courseID, teacherID } = req.body;
        try {
            const result = await this.teacherDAO.deleteCourse(courseID, teacherID);
            res.status(200).json({ message: 'Course deleted successfully', result });
        } catch (error) {
            if (error.message === 'Teacher not found') {
                res.status(404).json({ message: error.message });
            } else if (error.message === 'Course not found in teacher\'s created courses') {
                res.status(404).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An error occurred', error: error.message });
            }
        }
    }
    async addBalance(req, res) {
        const { teacherID, amount } = req.body;
    
        try {
            const result = await this.teacherDAO.addBalance(teacherID, amount);
            res.status(200).json({ message: 'Balance added successfully', result });
        } catch (error) {
            if (error.message === 'Teacher not found') {
                res.status(404).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An error occurred', error: error.message });
            }
        }
    }
    async getAllTeachers(req, res) {
        try {
            const teachers = await this.teacherDAO.getAllTeachers();
            res.status(200).json(teachers);
        } catch (error) {
            console.error('Error fetching teachers:', error);
            res.status(500).json({ error: error.message });
        }
    }
    
    
    
}

module.exports = TeacherController;
