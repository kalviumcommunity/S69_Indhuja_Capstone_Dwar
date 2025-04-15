require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/profiles', require('./routes/profileRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('\n🔹 Available Endpoints:');
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/profiles'.padEnd(30) + ' - Get all profiles');
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/profiles/:email'.padEnd(30) + ' - Get profile by email');
  console.log('\x1b[36m%s\x1b[0m', 'PUT  /api/profiles/:email'.padEnd(30) + ' - Update profile by email');
  console.log('\x1b[36m%s\x1b[0m', 'POST /api/auth/signup'.padEnd(30) + ' - Register new user (auto-creates profile)');
  console.log('\x1b[36m%s\x1b[0m', 'POST /api/auth/login'.padEnd(30) + ' - User login');
  
  // Testimonial endpoints
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/testimonials'.padEnd(30) + ' - Get all testimonials');
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/testimonials/seed'.padEnd(30) + ' - Seed initial testimonials');
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/testimonials/:id'.padEnd(30) + ' - Get testimonial by ID');
  console.log('\x1b[36m%s\x1b[0m', 'POST /api/testimonials'.padEnd(30) + ' - Create new testimonial (protected)');
  
  // Debug endpoints (optional)
  console.log('\x1b[33m%s\x1b[0m', 'GET  /api/auth/users'.padEnd(30) + ' - [DEBUG] Get all users');
});