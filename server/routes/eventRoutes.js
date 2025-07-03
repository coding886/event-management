const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController.js');

router.post('/', eventController.createEvent);
router.get('/', eventController.getAllEvents);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
