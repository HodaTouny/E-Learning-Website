// paymentRoutes.js
const express = require('express');
const PaymentController = require('../../controllers/payment/paymentController');
const auth = require('../../middleware/auth')

const router = express.Router();
const paymentController = new PaymentController();

router.post('/initiate',auth,paymentController.initiatePayment);
router.post('/verify',auth,paymentController.verifyPayment);

module.exports = router;
