const moongose = require('mongoose');
// Passing mongoose to make auto increment know which model to use
const AutoIncrement = require('mongoose-sequence')(moongose);


const courseSchema = new moongose.Schema({
    courseID: {type: Number},
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String,enum:['Backend Development','Frontend Development','Artificial Intelligence', 'UI/UX Design'],required: true},
    isPremium: {type: Boolean, default: false},
    price: {type: Number, required: function(){return this.isPremium}}, //price is required if isPremium is true
    image: {type: String, required: true},
    teacherID: {type: Number, ref: 'User'},
    createdDate: {type: Date, default: Date.now()}
});


// Auto Increment For courseID
Schema.plugin(AutoIncrement, {inc_field: 'courseID'});


const Course = moongose.model('Course', courseSchema);

module.exports = {Course}