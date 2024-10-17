const Contact = require('../../models/contact/contactModel');

class ContactDAO {
    constructor() {
        this.createContact = this.createContact.bind(this);
        this.findContactByEmail = this.findContactByEmail.bind(this);
    }
    async createContact(contactData) {
        try {
            const contact = new Contact(contactData);
            await contact.save();
            return contact;
        } catch (error) {
            console.error('Error saving contact to the database:', error.message || error);
            throw error; 
        }
    }
    

    async findContactByEmail(email) {
        return await Contact.findOne({ email });
    }
}

module.exports = new ContactDAO();
