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

// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/profiles', require('./routes/profileRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/organizations', require('./routes/organizationRoutes'));

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
  
  // Organization endpoints
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/organizations'.padEnd(30) + ' - Get all organizations');
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/organizations/:id'.padEnd(30) + ' - Get organization by ID');
  console.log('\x1b[36m%s\x1b[0m', 'POST /api/organizations/register'.padEnd(30) + ' - Register new organization');
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/organizations/profile'.padEnd(30) + ' - Get organization profile (protected)');
  console.log('\x1b[36m%s\x1b[0m', 'PATCH /api/organizations/profile'.padEnd(30) + ' - Update organization profile (protected)');
  console.log('\x1b[36m%s\x1b[0m', 'DELETE /api/organizations/gallery/:imageIndex'.padEnd(30) + ' - Remove gallery image (protected)');
  
  // Debug endpoints (optional)
  console.log('\x1b[33m%s\x1b[0m', 'GET  /api/auth/users'.padEnd(30) + ' - [DEBUG] Get all users');
});