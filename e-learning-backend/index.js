const cors = require('cors');
const express = require('express');
const connectDB = require('./dbconfig/dbconfig');
const EmailService = require('./Email/emailService');  // Import EmailService

const app = express();

app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(express.json());

connectDB.connect();

const PORT = process.env.PORT || 5000;

const courseRoutes = require('./routes/courseRoutes');
app.use(courseRoutes);

const userRoutes = require('./routes/user/routes');
app.use('/education', userRoutes);

// const emailService = new EmailService();  // Instantiate EmailService

// const recipientEmail = 'hodasammir@gmail.com'; 
// const emailSubject = 'Test Email from Node.js';
// const emailText = 'Hello, this is a test email!';
// const emailHtml = '<h1>Hello</h1><p>This is a test email!</p>';

emailService.sendEmail(recipientEmail, emailSubject, emailText, emailHtml);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
require('dotenv').config();
