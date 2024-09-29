const BaseUser = require('./UserModel');
const mongoose = require('mongoose');

class StudentUser extends BaseUser {
  constructor() {
    super();
    const studentSchema = new mongoose.Schema({
      enrolledCourses: [{
        courseId: { type: Number, ref: 'Course' },
        isCompleted: { type: Boolean, default: false }
      }]
    });
    this.Student = this.User.discriminator('Student', studentSchema);
  }

  getModel() {
    return this.Student;
  }
}

module.exports = StudentUser;
