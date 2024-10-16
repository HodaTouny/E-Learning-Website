// paymentRoutes.js
const express = require('express');
const PaymentController = require('../../controllers/payment/paymentController');

const router = express.Router();
const paymentController = new PaymentController();

router.post('/initiate',paymentController.initiatePayment);
router.post('/verify',paymentController.verifyPayment);

module.exports = router;
