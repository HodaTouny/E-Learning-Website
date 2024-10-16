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
            const student = await Student.findOne({ userID: studentId });
            if (!student) throw new Error('Student not found');

            const alreadyEnrolled = student.enrolledCourses.some(enrollment => enrollment.courseId === courseId);
            if (alreadyEnrolled) throw new Error('Student is already enrolled in this course');

            student.enrolledCourses.push({ courseId });

            const course = await this.courseModel.findOne({ courseID: courseId });
            if (!course) throw new Error('Course not found');
            course.enrolledStudentsCount += 1;
            console.log("course.enrolledStudentsCount", course.enrolledStudentsCount);
            await course.save();
            return await student.save();
        } catch (error) {
            console.error('Enrollment error:', error);
            throw error;
        }
    }
}

module.exports = StudentDAO;
