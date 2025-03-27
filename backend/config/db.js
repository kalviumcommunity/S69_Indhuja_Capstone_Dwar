const mongoose = require('mongoose');
const AppError = require('../utils/appError');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    throw new AppError('Database connection failed', 500);
  }
};

module.exports = connectDB;