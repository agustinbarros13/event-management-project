const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected');
    } catch (error) {
        console.error('Error connecting to database', error);
    }
};

module.exports = connectDB;
