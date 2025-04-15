const multer = require('multer');
const path = require('path');
const fs = require('fs');
const AppError = require('./appError');

// Create upload directories if they don't exist
const createUploadDirs = () => {
  const dirs = [
    './uploads',
    './uploads/logos',
    './uploads/covers',
    './uploads/documents',
    './uploads/gallery'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

createUploadDirs();

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = './uploads';
    
    // Determine the appropriate folder based on fieldname
    if (file.fieldname === 'logo') {
      uploadPath = './uploads/logos';
    } else if (file.fieldname === 'coverPhoto') {
      uploadPath = './uploads/covers';
    } else if (file.fieldname === 'registrationDoc' || file.fieldname === 'registrationProof') {
      uploadPath = './uploads/documents';
    } else if (file.fieldname === 'galleryImages') {
      uploadPath = './uploads/gallery';
    }
    
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // Create unique filename with timestamp and original extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  // Define allowed file types for different fields
  const imageTypes = /jpeg|jpg|png|gif/;
  const documentTypes = /jpeg|jpg|png|pdf|doc|docx/;
  
  let allowedTypes;
  
  if (file.fieldname === 'logo' || file.fieldname === 'coverPhoto' || file.fieldname === 'galleryImages') {
    allowedTypes = imageTypes;
  } else if (file.fieldname === 'registrationDoc' || file.fieldname === 'registrationProof') {
    allowedTypes = documentTypes;
  }
  
  // Check file extension
  const ext = path.extname(file.originalname).toLowerCase().substring(1);
  if (allowedTypes.test(ext)) {
    return cb(null, true);
  }
  
  // Reject file if it doesn't match allowed types
  cb(new AppError(`Only ${allowedTypes.source.replace(/\|/g, ', ')} files are allowed for ${file.fieldname}`, 400), false);
};

// Configure multer upload
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Create upload middleware for organization registration
const uploadOrgFiles = upload.fields([
  { name: 'logo', maxCount: 1 },
  { name: 'coverPhoto', maxCount: 1 },
  { name: 'registrationDoc', maxCount: 1 },
  { name: 'registrationProof', maxCount: 1 },
  { name: 'galleryImages', maxCount: 5 }
]);

module.exports = {
  uploadOrgFiles
};