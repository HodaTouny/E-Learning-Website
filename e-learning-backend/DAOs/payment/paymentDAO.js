// PaymentDAO.js

class PaymentDAO {
    constructor() {
        this.payments = new Map();
    }

    savePayment(userId, otp, billDetails) {
        this.payments.set(userId, { otp, billDetails, verified: false });
    }

    getPayment(userId) {
        return this.payments.get(userId);
    }

    verifyOTP(userId, otp) {
        const payment = this.getPayment(userId);
        if (payment && payment.otp === otp) {
            payment.verified = true;
            return true;
        }
        return false;
    }
}

module.exports = PaymentDAO;
