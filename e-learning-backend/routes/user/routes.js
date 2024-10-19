// routes/userRoutes.js
const { Router } = require("express");
const { userController, clientController, adminController, studentController, teacherController } = require("../../controllers/user");
const auth = require("../../middleware/auth");

const router = Router();

router.post("/login", userController.login); //tested
router.post('/refresh', userController.refreshToken); //tested
router.post("/register",clientController.register); // tested
router.delete('/delete/:email', auth, adminController.deleteUser); //tested
router.post('/logout', auth, userController.logout); //tested
router.post('/editdata', auth, clientController.editPersonalData); //tested
router.post('/addbalance',auth,teacherController.addBalance) //tested
router.post('/enrollcourse', auth, studentController.enrollCourse); //tested
router.post('/addcourse', auth, teacherController.addCourse); //tested
router.delete("/deletecourse", auth, teacherController.deleteCourse); //tested
router.get('/getteachers', auth, teacherController.getAllTeachers); //tested

module.exports = router;
