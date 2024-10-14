const ClientDAO = require("./clientDAO");
const { Student } = require('../../models/user/UserModel');

class StudentDAO extends ClientDAO {
    async enrollCourse(courseId, studentId) {
        const student = await Student.findOne({ userID: studentId });
        if (!student) throw new Error('Student not found');
        const alreadyEnrolled = student.enrolledCourses.some(enrollment => enrollment.courseId === courseId);
        if (alreadyEnrolled) throw new Error('Student is already enrolled in this course');
        student.enrolledCourses.push({ courseId });
        return await student.save();
    }
}

module.exports = StudentDAO;
