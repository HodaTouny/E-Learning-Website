const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

let Course;

class CourseModel {
  constructor() {
    if (!Course) {
      const lessonSchema = new mongoose.Schema({
        title: { type: String, required: true },
        video: { type: String, required: true },
      });

      const courseSchema = new mongoose.Schema({
        courseID: { type: Number, index: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: {
          type: String,
          enum: ['Backend Development', 'Frontend Development', 'Artificial Intelligence', 'UI/UX Design'],
          required: true,
        },
        isPremium: { type: Boolean, default: false },
        price: {
          type: Number,
          required: function () { return this.isPremium; }, 
        },
        image: { type: String },
        lessons: [lessonSchema],
        teacherID: { type: Number, ref: 'User' },
        teacherName: { type: String },
        createdDate: { type: Date, default: Date.now },
        enrolledStudents: { type: [String], default: [] },
        enrolledStudentsCount: { type: Number, default: 0 },
      });

      courseSchema.plugin(AutoIncrement, { inc_field: 'courseID' });

      Course = mongoose.model('Course', courseSchema);
    }
  }

  getModel() {
    return Course;
  }
}

module.exports = CourseModel;
