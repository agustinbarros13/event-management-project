const express = require('express');
const { createEvent, getEvents, addAttendee } = require('../controllers/eventController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, createEvent);
router.get('/', getEvents);
router.post('/:eventId/attend', verifyToken, addAttendee);

module.exports = router;
