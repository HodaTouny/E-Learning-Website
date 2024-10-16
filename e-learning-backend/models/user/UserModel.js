const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const commonUserSchema = new mongoose.Schema({
    userID: { type: Number },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String , default:'users_uploads/defaultProfile.png'},
    role: { type: String, enum: ['Admin', 'Teacher', 'Student'], required: true },
    refreshToken: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
}, { discriminatorKey: 'role' });

commonUserSchema.plugin(AutoIncrement, { inc_field: 'userID' });

const User = mongoose.model('User', commonUserSchema);

const studentSchema = new mongoose.Schema({
    enrolledCourses: [{
        courseId: { type: Number, ref: 'Course' },
        isCompleted: { type: Boolean, default: false }
    }]
});

const teacherSchema = new mongoose.Schema({
    createdCourses: [{ courseId: { type: Number, required: true } }],
});

const Admin = User.discriminator('Admin', new mongoose.Schema({}));
const Student = User.discriminator('Student', studentSchema);
const Teacher = User.discriminator('Teacher', teacherSchema);

module.exports = { User, Admin, Student, Teacher };
