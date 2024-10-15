const ClientController = require("./clientController");

class StudentController extends ClientController {
    constructor() {
        super();
        this.enrollCourse = this.enrollCourse.bind(this);
    }

    async enrollCourse(req, res) {
        const { courseId, studentId } = req.body;
        if (!courseId || !studentId) {
            return res.status(400).json({ message: 'courseId and studentId are required.' });
        }

        try {
            const result = await this.studentDAO.enrollCourse(courseId, studentId);
            return res.status(200).json({ message: 'Enrolled successfully', result });
        } 
        catch (error) {
            if (error.message === 'Student not found') {
                return res.status(404).json({ message: error.message });
            } 
            else if (error.message === 'Course not found') {
                return res.status(404).json({ message: error.message });
            } 
            else {
                return res.status(400).json({ message: 'An error occurred', error: error.message });
            }
        }
    }
}

module.exports = StudentController;
