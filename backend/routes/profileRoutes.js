const router = require('express').Router();
const profileController = require('../controllers/profileController');

router.get('/', profileController.getAllProfiles);
router.get('/:email', profileController.getProfile);
router.put('/:email', profileController.updateProfile);

module.exports = router;