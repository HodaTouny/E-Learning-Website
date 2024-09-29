const User = require('./UserModel');
const Admin = require('./AdminModel');
const Teacher = require('./TeacherModel');
const Student = require('./StudentModel');

module.exports = {
  User: new BaseUser().getModel(),
  Admin: new AdminUser().getModel(),
  Teacher: new TeacherUser().getModel(),
  Student: new StudentUser().getModel()
};
