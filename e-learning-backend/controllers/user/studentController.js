const ClientController = require("./clientController");

/*
Controller Contain Student Extra Operations
*/
class StudentController extends ClientController {
    constructor() {
        super();
        this.enrollCourse = this.enrollCourse.bind(this);
        this.getEnrolledCourses = this.getEnrolledCourses.bind(this);
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
            else if (error.message === 'Student is already enrolled in this course') {
                return res.status(400).json({ message: error.message });
            } 
            else {
                return res.status(400).json({ message: 'An error occurred', error: error.message });
            }
        }
    }

    async getEnrolledCourses(req, res) {
    try {
        console.log("getEnrolledCourses method called");

        const studentId = req.params.userId;
        const enrolledCourses = await this.studentDAO.getEnrolledCourses(studentId);
        
        if (!enrolledCourses) {
            return res.status(404).json({ message: 'No enrolled courses found.' });
        }

        res.status(200).json(enrolledCourses);
    } catch (error) {
        res.status(500).json({ message: error.message || 'Failed to retrieve enrolled courses' });
    }
}

}

module.exports = StudentController;
