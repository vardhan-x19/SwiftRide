const express = require('express');
const { body, validationResult } = require('express-validator');
const authMiddleware=require('../Middlewares/auth.middleware');
const router = express.Router();
const rideController=require('../Controller/ride.controller');
const { query } = require('express-validator');

router.post('/create', [
  body('origin').notEmpty().withMessage('Origin is required'),
  body('destination').notEmpty().withMessage('Destination is required'),
  body('vehicleType').notEmpty().withMessage('Vehicle type is required')
],authMiddleware.authUser,rideController.setRide);

router.get('/fare',[
  query('origin').notEmpty().withMessage('Origin is required'),
  query('destination').notEmpty().withMessage('Destination is required')
],authMiddleware.authUser,rideController.getFare)

module.exports = router;