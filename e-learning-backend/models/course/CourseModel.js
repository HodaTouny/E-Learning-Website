const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

class CourseModel {
  constructor() {
    const courseSchema = new mongoose.Schema({
      courseID: { type: Number },
      name: { type: String, required: true },
      description: { type: String, required: true },
      category: { type: String,enum: ['Backend Development','Frontend Development','Artificial Intelligence','UI/UX Design'],required: true},
      isPremium: { type: Boolean, default: false },
      price: {type: Number,required: function () { return this.isPremium; } // price required if isPremium is true
      },
      image: { type: String, required: true },
      teacherID: { type: Number, ref: 'User' },
      createdDate: { type: Date, default: Date.now() }
    });

    // Auto Increment for courseID
    courseSchema.plugin(AutoIncrement, { inc_field: 'courseID' });

    this.Course = mongoose.model('Course', courseSchema);
  }

  getModel() {
    return this.Course;
  }
}

module.exports = CourseModel;
