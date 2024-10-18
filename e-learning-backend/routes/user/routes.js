// routes/userRoutes.js
const { Router } = require("express");
const { userController, clientController, adminController, studentController, teacherController } = require("../../controllers/user");
const auth = require("../../middleware/auth");

const router = Router();

router.post("/login", userController.login); // tested
router.post('/refresh', userController.refreshToken); // tested
router.post("/register",clientController.register); // tested
router.delete('/delete/:email', auth, adminController.deleteUser); // updated to DELETE method
router.post('/logout', auth, userController.logout); // tested
router.post('/editdata', auth, clientController.editPersonalData); // tested
router.post('/addbalance',auth,teacherController.addBalance)

// Course management routes
router.post('/enrollcourse', auth, studentController.enrollCourse); // tested
router.post('/addcourse', auth, teacherController.addCourse); // updated to match method name
router.delete("/deletecourse", auth, teacherController.deleteCourse); // updated to DELETE method

module.exports = router;
