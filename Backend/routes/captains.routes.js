const { body } = require('express-validator');
const captainModel = require('../Models/captainModel');
const express = require('express');
const router = express.Router();
const captainController = require('../Controller/captain.controller');
const captainMiddleWare = require('../Middlewares/captain.middlewares');
router.post('/register',
  [body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 5 }).withMessage('Password must be atleast 8 characters long'),
  body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters long'),
  body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be atleast 3 characters long'),
  body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
  body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
  ],captainController.registerCaptain
);
// login functionality
router.post('/login',[
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 5 }).withMessage('Password must be atleast 8 characters')
],captainController.loginCaptain);

//captain profile
router.get('/profile',captainMiddleWare.authCaptain,captainController.captainProfile);

//captian logout
router.get('/logout',captainMiddleWare.authCaptain,captainController.logoutCaptain);

module.exports = router;