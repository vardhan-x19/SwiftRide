const { validationResult } = require('express-validator');
const rideService = require('../services/rideService');

module.exports.setRide = async (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { origin, destination, vehicleType } = req.body;
  console.log('inController', origin, destination, vehicleType);

  try {
    const ride = await rideService.createRide({
      userId: req.user._id,
      origin,
      destination,
      vehicleType
    });
    return res.status(201).json({ message: 'Ride created successfully', ride });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}