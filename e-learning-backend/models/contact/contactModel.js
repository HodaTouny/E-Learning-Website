const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Ensure email uniqueness
    createdAt: { type: Date, default: Date.now } // Store the date the contact was created
});

module.exports = mongoose.model('Contact', contactSchema);
