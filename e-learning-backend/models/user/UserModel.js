const moongose = require('mongoose');
// Passing mongoose to make auto increment know which model to use
const AutoIncrement = require('mongoose-sequence')(mongoose); 

// User Main Model
const Schema = new moongose.Schema({
    userID:{type:Number},
    name:{type:String, required:true},
    email:{type:String, required:true, unique: true},
    password:{type:String , required:true},
    role:{type:String, enum:['Admin','Teacher','Student'] ,required:true}
},
{ discriminatorKey:'role'} // for inheritance
);


// Auto Increment For userID
Schema.plugin(AutoIncrement, {inc_field: 'userID'});


const User = moongose.model('User', Schema);

// Admin extended from User
const Admin = User.discriminator('Admin', new Schema({}));

// Teacher extended from User
const Teacher = User.discriminator('Teacher', new Schema({
    createdCourses: [ {type: Number, ref: 'Course'}]
}));

// Student extended from User
const Student = User.discriminator('Student', new Schema({
    enrolledCourses: [ {
        courseId: { type: Number, ref: 'Course' },
        isCompleted: { type: Boolean, default: false }
    }]
}));

// Exporting
module.exports = {User, Admin, Teacher, Student}