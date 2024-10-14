const ClientController = require("./clientController");

class StudentController extends ClientController {
    constructor() {
        super();
        this.enrollCourse = this.enrollCourse.bind(this);
    }

    async enrollCourse(req, res) {
        const { courseId, studentId } = req.body;
        try {
            const result = await this.studentDAO.enrollCourse(courseId, studentId);
            res.status(200).json({ message: 'Enrolled successfully', result });
        } catch (error) {
            if (error.message === 'Student not found') {
                res.status(404).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An error occurred', error: error.message });
            }
        }
    }
}

module.exports = StudentController;
