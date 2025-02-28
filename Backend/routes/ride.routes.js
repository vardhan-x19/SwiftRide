const express = require('express');
const { body, validationResult } = require('express-validator');
const authMiddleware=require('../Middlewares/auth.middleware');
const router = express.Router();
const rideController=require('../Controller/ride.controller');
router.post('/create', [
  body('origin').notEmpty().withMessage('Origin is required'),
  body('destination').notEmpty().withMessage('Destination is required'),
  body('vehicleType').notEmpty().withMessage('Vehicle type is required')
],authMiddleware.authUser,rideController.setRide);

module.exports = router;