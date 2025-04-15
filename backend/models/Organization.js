const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required'],
    unique: true
  },
  // Basic Information
  orgName: {
    type: String,
    required: [true, 'Organization name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/\S+@\S+\.\S+/, 'Invalid email format']
  },
  
  // Organization Details
  orgType: {
    type: String,
    required: [true, 'Organization type is required'],
    enum: [
      'Nonprofit Organization',
      'Educational Institution',
      'Healthcare Provider',
      'Religious Organization',
      'Community Group',
      'Foundation',
      'Social Enterprise',
      'Charity',
      'NGO',
      'Government Agency',
      'International Organization',
      'Arts & Culture Organization',
      'Environmental Organization',
      'Human Rights Organization',
      'Other'
    ]
  },
  regNumber: {
    type: String,
    required: [true, 'Registration number is required'],
    unique: true
  },
  taxExemptStatus: {
    type: String,
    enum: [
      '501(c)(3) - Public Charity',
      '501(c)(4) - Social Welfare',
      '501(c)(7) - Social Club',
      'Not Tax Exempt',
      'International Equivalent',
      'Pending',
      'Other',
      ''
    ]
  },
  foundedYear: {
    type: Number,
    min: 1800,
    max: new Date().getFullYear()
  },
  mission: {
    type: String,
    required: [true, 'Mission statement is required']
  },
  areasOfFocus: {
    type: [String],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one area of focus is required'
    }
  },
  
  // Location Information
  country: {
    type: String,
    required: [true, 'Country is required']
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  city: {
    type: String,
    required: [true, 'City is required']
  },
  state: {
    type: String,
    required: [true, 'State/Province is required']
  },
  postalCode: {
    type: String,
    required: [true, 'Postal/ZIP code is required']
  },
  
  // Contact Information
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  website: {
    type: String,
    match: [/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/, 'Invalid URL format']
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String
  },
  
  // Contact Person
  contactPerson: {
    firstName: {
      type: String,
      required: [true, 'Contact person first name is required']
    },
    lastName: {
      type: String,
      required: [true, 'Contact person last name is required']
    },
    position: {
      type: String,
      required: [true, 'Contact person position is required']
    },
    email: {
      type: String,
      match: [/\S+@\S+\.\S+/, 'Invalid email format']
    },
    phone: String
  },
  
  // Banking Information
  bankingInfo: {
    accountName: {
      type: String,
      required: [true, 'Account name is required']
    },
    accountNumber: {
      type: String,
      required: [true, 'Account number is required']
    },
    bankName: {
      type: String,
      required: [true, 'Bank name is required']
    },
    routingNumber: {
      type: String,
      required: [true, 'Routing number is required']
    },
    swiftCode: String
  },
  
  // Media - store file paths
  logo: String,
  coverPhoto: String,
  registrationDoc: {
    type: String,
    required: [true, 'Registration document is required']
  },
  registrationProof: String,
  galleryImages: [String],
  
  // Status
  verified: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Organization', organizationSchema);