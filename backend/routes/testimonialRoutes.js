const express = require('express');
const testimonialController = require('../controllers/testimonialController');
const { protect } = require('../middlewares/auth');

const router = express.Router();

// Public routes
router.get('/', testimonialController.getAllTestimonials);
router.get('/seed', testimonialController.seedTestimonials);
router.get('/:id', testimonialController.getTestimonial);

// Protected routes (require authentication)
router.use(protect);
router.post('/', testimonialController.createTestimonial);
router.patch('/:id', testimonialController.updateTestimonial);
router.delete('/:id', testimonialController.deleteTestimonial);

module.exports = router;