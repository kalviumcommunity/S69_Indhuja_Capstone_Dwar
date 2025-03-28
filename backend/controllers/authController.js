const bcrypt = require('bcryptjs');
const { users, profiles } = require('../storage'); // Import shared storage

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ status: 'fail', message: 'Missing fields' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ status: 'fail', message: 'Invalid email' });
    }
    if (users.some(u => u.email === email)) {
      return res.status(409).json({ status: 'fail', message: 'Email exists' });
    }

    // Create user and profile
    const hashedPassword = await bcrypt.hash(password, 10);
    const now = new Date();
    
    users.push({
      email,
      name,
      password: hashedPassword,
      createdAt: now
    });

    profiles.push({
      email,
      name,
      bio: '',
      createdAt: now,
      updatedAt: now
    });

    res.status(201).json({
      status: 'success',
      data: { user: { email, name } }
    });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ status: 'fail', message: 'Invalid credentials' });
    }

    res.status(200).json({
      status: 'success',
      data: { user: { email: user.email, name: user.name } }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};