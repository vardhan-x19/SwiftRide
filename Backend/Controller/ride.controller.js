const { validationResult } = require('express-validator');
const rideService = require('../services/rideService');
const mapService = require('../services/mapsService');
const { sendMessageToSocketId } = require('../socket');

module.exports.setRide = async (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { origin, destination, vehicleType } = req.body;

  try {
    const ride = await rideService.createRide({
      userId: req.user._id,
      origin,
      destination,
      vehicleType
    });

    // Send response to user
    res.status(201).json({ message: 'Ride created successfully', ride });

    // Perform additional operations after sending the response
    const coordinates = await mapService.getAddress(origin);
    const captains = await mapService.getCaptainsInRadius(coordinates.ltd, coordinates.lng, 2);
    console.log("the ride func is running")
    ride.otp="";
    captains.forEach(captain => {
      sendMessageToSocketId(captain.socketId, { event: 'new-ride', data: ride });
    });

  } catch (error) {
    console.error('Error setting ride:', error);
    if (!res.headersSent) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports.getFare = async (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { origin, destination } = req.query;

  try {
    const fare = await rideService.getFare({
      origin,
      destination
    });
    return res.status(201).json({ message: 'Fare calculated successfully', fare });
  } catch (error) {
    console.error('Error calculating fare:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};