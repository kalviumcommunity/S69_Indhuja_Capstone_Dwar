const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required'],
    unique: true
  },
  organizationName: {
    type: String,
    required: [true, 'Organization name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/\S+@\S+\.\S+/, 'Invalid email format']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  website: {
    type: String,
    match: [/https?:\/\/\S+/, 'Invalid URL format']
  },
  registrationNumber: {
    type: String,
    required: [true, 'Registration number is required'],
    unique: true
  },
  missionStatement: {
    type: String,
    required: [true, 'Mission statement is required']
  }
}, { timestamps: true });

module.exports = mongoose.model('Organization', organizationSchema);