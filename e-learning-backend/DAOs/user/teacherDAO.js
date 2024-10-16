const ClientDAO = require("./clientDAO");
const { Teacher } = require('../../models/user/UserModel');

class TeacherDAO extends ClientDAO {
    async addCourse(courseId, teacherID) {
        const teacher = await Teacher.findOne({ userID: teacherID });
        if (!teacher) throw new Error('Teacher not found');
        const alreadyCreated = teacher.createdCourses.some(course => course.courseId === courseId);
        if (alreadyCreated) throw new Error('Teacher has already uploaded this course');
        teacher.createdCourses.push({ courseId });
        return await teacher.save();
    }

    async deleteCourse(courseId, teacherID) {
        const teacher = await Teacher.findOne({ userID: teacherID });
        if (!teacher) throw new Error('Teacher not found');
        const courseIndex = teacher.createdCourses.findIndex(course => course.courseId === courseId);
        if (courseIndex === -1) throw new Error('Course not found in teacher\'s created courses');
        teacher.createdCourses.splice(courseIndex, 1);
        return await teacher.save(); // Save the updated teacher document
    }
}

module.exports = TeacherDAO;