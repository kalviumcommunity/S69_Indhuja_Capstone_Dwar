const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const { uploadOrgFiles } = require('../utils/fileUpload');
const authMiddleware = require('../middlewares/auth');

// Public routes
router.get('/', organizationController.getAllOrganizations);
router.get('/:id', organizationController.getOrganizationById);

// Organization registration
router.post(
  '/register',
  uploadOrgFiles,
  organizationController.registerOrganization
);

// Protected routes (require authentication)
router.use(authMiddleware.protect);

// Organization profile routes (only accessible by the organization itself)
router.get(
  '/profile',
  authMiddleware.restrictTo('organization'),
  organizationController.getOrganizationProfile
);

router.patch(
  '/profile',
  authMiddleware.restrictTo('organization'),
  uploadOrgFiles,
  organizationController.updateOrganizationProfile
);

router.delete(
  '/gallery/:imageIndex',
  authMiddleware.restrictTo('organization'),
  organizationController.removeGalleryImage
);

module.exports = router;