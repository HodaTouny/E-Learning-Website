const ContactDAO = require('../../DAOs/contact/contactDAO');
const UserDaO = require('../../DAOs/user/userDAO');
const EmailService = require('../../Email/emailService');
const UserDAO = new UserDaO();

class ContactController {
    constructor() {
        this.emailService = new EmailService();
        this.registerUser = this.registerUser.bind(this);
    }

    async registerUser(req, res) {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required.' });
        }

        try {
            if (!this.emailService) {
                throw new Error('Email service not available.');
            }
            const existingContact = await ContactDAO.findContactByEmail(email);
            if (existingContact) {
                return res.status(400).json({ message: 'Contact already exists' });
            }
            const userExists = await UserDAO.findUserByEmail(email);
            const hasAccount = !!userExists; 
            const contact = await ContactDAO.createContact({ name, email , hasAccount });            

            const subject = 'Welcome to Our Learning Community!';
            const text = `Hi ${name},\n\nThank you for connecting with us! We will keep you updated frequently.`;
            const html = `<p>Hi ${name},</p><p>Thank you for connecting with us! We will keep you updated frequently.</p>`;

            try {
                await this.emailService.sendEmail(contact.email, subject, text, html);
            } catch (emailError) {
                console.error('Error sending email:', emailError.message || emailError);
            }

            res.status(201).json({ 
                message: 'Contact registered successfully and email sent.', 
                contact: contact
            });
        } catch (error) {
            console.error('Error registering contact:', error.message || error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = new ContactController();
