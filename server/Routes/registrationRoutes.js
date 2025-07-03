const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

router.post('/', registrationController.registerUserToEvent);
router.get('/', registrationController.getAllRegistrations);

module.exports = router;
