const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

class Database {
    constructor() {
        this.dbUrl = process.env.MONGO_URL;
        this.dbName = "Elearning-website";
    }

    async connect() {
        try {
            await mongoose.connect(this.dbUrl, {
                dbName: this.dbName
            });
        
            console.log('MongoDB connected');
        } catch (error) {
            console.error('MongoDB connection failed:', error.message);
            console.error(error.stack);
            process.exit(1);
        }
    }
}

module.exports = new Database();
