const ContactDAO = require('../../DAOs/contact/contactDAO');
const EmailService = require('../../Email/emailService');
class ContactController {
    constructor() {
        this.emailService = new EmailService();
        this.registerUser = this.registerUser.bind(this);
    }

    async registerUser(req, res) {
        const { name, email } = req.body;
        try {
            if (!this.emailService) {
                throw new Error('Email service not available.');
            }

            const existingContact = await ContactDAO.findContactByEmail(email);
            if (existingContact) {
                return res.status(400).json({ message: 'Contact already exists' });
            }

            const contact = await ContactDAO.createContact({ name, email });

            const subject = 'Welcome to Our Learning Community!';
            const text = `Hi ${name},\n\nThank you for connecting with us! We will keep you updated frequently.`;
            const html = `<p>Hi ${name},</p><p>Thank you for connecting with us! We will keep you updated frequently.</p>`;

            await this.emailService.sendEmail(contact.email, subject, text, html);
            res.status(201).json({ message: 'Contact registered successfully and email sent.', contact });
        } catch (error) {
            console.error('Error registering contact:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = new ContactController();
