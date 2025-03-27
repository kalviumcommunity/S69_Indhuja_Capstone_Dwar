require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/api/profile', require('./routes/profileRoutes'));

const PORT = 5000;
app.listen(PORT, () => console.log(`GET API server running on port ${PORT}`));