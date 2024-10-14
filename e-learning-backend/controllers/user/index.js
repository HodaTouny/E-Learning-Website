const UserController = require("./userController");
const ClientController = require("./clientController");
const AdminController = require("./adminController");
const StudentController = require("./studentController");
const TeacherController = require("./teacherController");

module.exports = {
    userController: new UserController(),
    clientController: new ClientController(),
    adminController: new AdminController(),
    studentController: new StudentController(),
    teacherController: new TeacherController()
};
