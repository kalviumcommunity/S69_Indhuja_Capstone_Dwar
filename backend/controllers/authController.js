// Temporary in-memory storage
const users = [];

exports.signup = (req, res) => {
  const { email, password } = req.body;
  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);
  
  res.status(201).json({
    status: 'success',
    data: { user: { id: newUser.id, email } }
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  
  if (!user || user.password !== password) {
    return res.status(401).json({ 
      status: 'fail', 
      message: 'Invalid credentials' 
    });
  }
  
  res.status(200).json({
    status: 'success',
    data: { user: { id: user.id, email } }
  });
};

// Debugging helper (remove in production)
exports.getAllUsers = (req, res) => {
  res.json(users);
};