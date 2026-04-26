const express = require('express');
const authController = require('../controllers/authController');
const router  = express.Router();

//API FROM LOCAL DB
router.post('/booking', authController.Booking_info);

module.exports = router;
