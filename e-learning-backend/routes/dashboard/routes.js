
const express = require('express');
const dashboardController = require('../../controllers/dashboard/dashboardController');

const router = express.Router();

router.get('/user-stats', dashboardController.getUserStats);
router.get('/course-stats', dashboardController.getCourseStats);
router.get('/contact-stats', dashboardController.getContactStats);

module.exports = router;
