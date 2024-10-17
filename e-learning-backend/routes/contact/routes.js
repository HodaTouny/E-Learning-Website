const express = require('express');
const router = express.Router();
const ContactController = require('../../controllers/contact/contactConroller');


router.post('/connect', ContactController.registerUser);

module.exports = router;
