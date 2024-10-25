const ClientDAO = require("./clientDAO");
const { Student } = require('../../models/user/UserModel');
const CourseModel = require('../../models/course/CourseModel');

class StudentDAO extends ClientDAO {
    constructor() {
        super();
        this.courseModel = new CourseModel().getModel();
    }

    async enrollCourse(courseId, studentId) {
        try {
            // Check if the student exists
            const student = await Student.findOne({ userID: studentId });
            if (!student) throw new Error('Student not found');

            const alreadyEnrolled = student.enrolledCourses.some(enrollment => enrollment.courseId === Number(courseId));
            if (alreadyEnrolled) throw new Error('Student is already enrolled in this course');
    
            student.enrolledCourses.push(courseId);
                const course = await this.courseModel.findOne({ courseID: courseId });
            if (!course) throw new Error('Course not found');    
            course.enrolledStudentsCount += 1;

            await Promise.all([course.save(), student.save()]);

            return student;
        } catch (error) {
            console.error('Enrollment error:', error);
            throw error;
        }
    }
    
    async getEnrolledCourses(studentId) {
    try {
        const student = await Student.findOne({ userID: studentId });
        if (!student) throw new Error('Student not found');

        //to ensure that enrolledCourses is an array and extract the course IDs
        if (!Array.isArray(student.enrolledCourses)) {
            throw new Error('Enrolled courses are not valid.');
        }

        const courseIds = student.enrolledCourses
            .map(enrollment => enrollment.courseId)
            .filter(id => typeof id==='number'&&!isNaN(id));
        if (courseIds.length === 0) {
            return [];
        }
        const coursesEnrolled = await this.courseModel.find({
            courseID: { $in: courseIds }
        });
        return coursesEnrolled;
    } catch (error) {
        console.error('Error fetching enrolled courses:', error);
        throw error;
    }
}
}

module.exports = StudentDAO;
