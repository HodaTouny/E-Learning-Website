const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            secure:true,
            host: 'smtp.gmail.com',
            port: 465,
            service: 'gmail',
            auth: {
                user: "hodasammiir@gmail.com",
                pass: "pmtt ksjd gvgn vikj"
            }
        });
    }

    async sendEmail(to, subject, text, html) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: to,
            subject: subject,
            text: text,
            html: html
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
}

module.exports = EmailService;  // Make sure to export the class
