const User = require('../models/User');
const Organization = require('../models/Organization');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Create token and send response
const createSendToken = (user, organization, statusCode, res) => {
  const token = signToken(user._id);
  
  // Remove password from output
  user.password = undefined;
  
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
      organization
    }
  });
};

// Register a new organization
exports.registerOrganization = catchAsync(async (req, res, next) => {
  // 1. Extract data from request body
  const {
    orgName,
    email,
    password,
    orgType,
    regNumber,
    taxExemptStatus,
    foundedYear,
    mission,
    areasOfFocus,
    country,
    address,
    city,
    state,
    postalCode,
    phone,
    website,
    socialMedia,
    contactPerson,
    bankingInfo
  } = req.body;
  
  // 2. Check if user with this email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(new AppError('Email already in use', 400));
  }
  
  // 3. Check if organization with this registration number already exists
  const existingOrg = await Organization.findOne({ regNumber });
  if (existingOrg) {
    return next(new AppError('Registration number already registered', 400));
  }
  
  // 4. Create new user with organization role
  const newUser = await User.create({
    email,
    password,
    role: 'organization'
  });
  
  // 5. Process file uploads
  const fileData = {};
  
  if (req.files) {
    // Process logo
    if (req.files.logo && req.files.logo[0]) {
      fileData.logo = req.files.logo[0].path;
    }
    
    // Process cover photo
    if (req.files.coverPhoto && req.files.coverPhoto[0]) {
      fileData.coverPhoto = req.files.coverPhoto[0].path;
    }
    
    // Process registration document
    if (req.files.registrationDoc && req.files.registrationDoc[0]) {
      fileData.registrationDoc = req.files.registrationDoc[0].path;
    }
    
    // Process registration proof
    if (req.files.registrationProof && req.files.registrationProof[0]) {
      fileData.registrationProof = req.files.registrationProof[0].path;
    }
    
    // Process gallery images
    if (req.files.galleryImages && req.files.galleryImages.length > 0) {
      fileData.galleryImages = req.files.galleryImages.map(file => file.path);
    }
  }
  
  // 6. Create new organization
  const newOrganization = await Organization.create({
    user: newUser._id,
    orgName,
    email,
    orgType,
    regNumber,
    taxExemptStatus,
    foundedYear,
    mission,
    areasOfFocus,
    country,
    address,
    city,
    state,
    postalCode,
    phone,
    website,
    socialMedia,
    contactPerson,
    bankingInfo,
    ...fileData
  });
  
  // 7. Send response with token
  createSendToken(newUser, newOrganization, 201, res);
});

// Get organization profile
exports.getOrganizationProfile = catchAsync(async (req, res, next) => {
  const organization = await Organization.findOne({ user: req.user.id });
  
  if (!organization) {
    return next(new AppError('Organization profile not found', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      organization
    }
  });
});

// Update organization profile
exports.updateOrganizationProfile = catchAsync(async (req, res, next) => {
  // 1. Find organization
  const organization = await Organization.findOne({ user: req.user.id });
  
  if (!organization) {
    return next(new AppError('Organization profile not found', 404));
  }
  
  // 2. Process file uploads
  const fileData = {};
  
  if (req.files) {
    // Process logo
    if (req.files.logo && req.files.logo[0]) {
      fileData.logo = req.files.logo[0].path;
    }
    
    // Process cover photo
    if (req.files.coverPhoto && req.files.coverPhoto[0]) {
      fileData.coverPhoto = req.files.coverPhoto[0].path;
    }
    
    // Process registration document
    if (req.files.registrationDoc && req.files.registrationDoc[0]) {
      fileData.registrationDoc = req.files.registrationDoc[0].path;
    }
    
    // Process registration proof
    if (req.files.registrationProof && req.files.registrationProof[0]) {
      fileData.registrationProof = req.files.registrationProof[0].path;
    }
    
    // Process gallery images
    if (req.files.galleryImages && req.files.galleryImages.length > 0) {
      // Append new images to existing gallery
      const newGalleryImages = req.files.galleryImages.map(file => file.path);
      fileData.galleryImages = [...organization.galleryImages, ...newGalleryImages];
    }
  }
  
  // 3. Update organization
  const updatedOrganization = await Organization.findByIdAndUpdate(
    organization._id,
    { 
      ...req.body,
      ...fileData
    },
    {
      new: true,
      runValidators: true
    }
  );
  
  // 4. Send response
  res.status(200).json({
    status: 'success',
    data: {
      organization: updatedOrganization
    }
  });
});

// Get all organizations (public data only)
exports.getAllOrganizations = catchAsync(async (req, res, next) => {
  const organizations = await Organization.find({ active: true })
    .select('orgName orgType mission areasOfFocus country city logo coverPhoto');
  
  res.status(200).json({
    status: 'success',
    results: organizations.length,
    data: {
      organizations
    }
  });
});

// Get organization by ID (public profile)
exports.getOrganizationById = catchAsync(async (req, res, next) => {
  const organization = await Organization.findById(req.params.id)
    .select('-bankingInfo -registrationDoc -registrationProof -active -verified');
  
  if (!organization || !organization.active) {
    return next(new AppError('Organization not found', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      organization
    }
  });
});

// Remove gallery image
exports.removeGalleryImage = catchAsync(async (req, res, next) => {
  const { imageIndex } = req.params;
  
  // 1. Find organization
  const organization = await Organization.findOne({ user: req.user.id });
  
  if (!organization) {
    return next(new AppError('Organization profile not found', 404));
  }
  
  // 2. Check if image exists
  if (!organization.galleryImages || imageIndex >= organization.galleryImages.length) {
    return next(new AppError('Image not found', 404));
  }
  
  // 3. Remove image from gallery
  organization.galleryImages.splice(imageIndex, 1);
  await organization.save();
  
  // 4. Send response
  res.status(200).json({
    status: 'success',
    data: {
      galleryImages: organization.galleryImages
    }
  });
});