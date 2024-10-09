const express = require('express');
const connectDB = require('./dbconfig/dbconfig');

const app = express();
app.use(express.json());
connectDB.connect();

const PORT = process.env.PORT || 5000;

const courseRoutes=require('./routes/courseRoutes')
app.use(courseRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
