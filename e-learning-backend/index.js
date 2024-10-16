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

const paymentRoutes = require('./routes/payment/routes');
app.use('/payment',paymentRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
require('dotenv').config();
