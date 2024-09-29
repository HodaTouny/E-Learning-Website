const BaseUser = require('./UserModel');
const mongoose = require('mongoose');

class TeacherUser extends BaseUser {
  constructor() {
    super();
    const teacherSchema = new mongoose.Schema({
      createdCourses: [{ type: Number, ref: 'Course' }]
    });
    this.Teacher = this.User.discriminator('Teacher', teacherSchema);
  }

  getModel() {
    return this.Teacher;
  }
}

module.exports = TeacherUser;
