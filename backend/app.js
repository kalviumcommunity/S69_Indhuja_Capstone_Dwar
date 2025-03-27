require('dotenv').config();
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/profile', require('./routes/profileRoutes')); // Existing GET
app.use('/api/auth', require('./routes/authRoutes')); // New POST routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on: http://localhost:${PORT}`);
  console.log('\n🔹 Available Endpoints:');
  console.log('\x1b[36m%s\x1b[0m', 'GET  /api/profile'.padEnd(25) + ' - Fetch user profile');
  console.log('\x1b[36m%s\x1b[0m', 'POST /api/auth/signup'.padEnd(25) + ' - Register new user');
  console.log('\x1b[36m%s\x1b[0m', 'POST /api/auth/login'.padEnd(25) + ' - User login');
  console.log('\n💡 Pro Tip: Use Bruno/Postman to test endpoints!');
});