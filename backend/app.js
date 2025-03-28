require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/api/profiles', require('./routes/profileRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('\n🔹 Available Endpoints:');
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/profiles'.padEnd(30) + ' - Get all profiles');
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/profiles/:email'.padEnd(30) + ' - Get profile by email');
  console.log('\x1b[36m%s\x1b[0m', 'PUT  /api/profiles/:email'.padEnd(30) + ' - Update profile by email');
  console.log('\x1b[36m%s\x1b[0m', 'POST /api/auth/signup'.padEnd(30) + ' - Register new user (auto-creates profile)');
  console.log('\x1b[36m%s\x1b[0m', 'POST /api/auth/login'.padEnd(30) + ' - User login');
  
  // Debug endpoints (optional)
  console.log('\x1b[33m%s\x1b[0m', 'GET  /api/auth/users'.padEnd(30) + ' - [DEBUG] Get all users');
});