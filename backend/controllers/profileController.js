const { profiles } = require('../storage');

exports.getAllProfiles = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: { profiles }
    });
  } catch (err) {
    console.error('Get profiles error:', err);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getProfile = (req, res) => {
  try {
    const { email } = req.params;
    const profile = profiles.find(p => p.email === email);

    if (!profile) {
      return res.status(404).json({ status: 'fail', message: 'Profile not found' });
    }

    res.status(200).json({
      status: 'success',
      data: { profile }
    });
  } catch (err) {
    console.error('Get profile error:', err);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.updateProfile = (req, res) => {
  try {
    const { email } = req.params;
    const { name, bio } = req.body;
    const now = new Date();

    let profile = profiles.find(p => p.email === email);

    if (!profile) {
      profile = { email, name, bio, createdAt: now, updatedAt: now };
      profiles.push(profile);
      return res.status(201).json({ status: 'success', data: { profile } });
    }

    profile.name = name || profile.name;
    profile.bio = bio || profile.bio;
    profile.updatedAt = now;

    res.status(200).json({
      status: 'success',
      data: { profile }
    });
  } catch (err) {
    console.error('Update profile error:', err);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};