const ClientController = require("./clientController");

class TeacherController extends ClientController {
    constructor() {
        super();
        this.addCourse = this.addCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
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
        const { courseId, teacherID } = req.body;
        try {
            const result = await this.teacherDAO.deleteCourse(courseId, teacherID);
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
}

module.exports = TeacherController;
