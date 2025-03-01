const mapsService = require('./mapsService');
const rideModel = require('../Models/rideModel');
const crypto = require('crypto');

const getOtp = (num) => {
  if (!num || num <= 0) {
    throw new Error('Number of digits must be greater than 0');
  }

  const otp = crypto.randomInt(0, Math.pow(10, num)).toString().padStart(num, '0');
  console.log(otp);
  return otp;
}

const getFare = async ({ origin, destination }) => {
  if (!origin || !destination) {
    throw new Error('Origin and destination are required');
  }

  const { distance, duration } = await mapsService.getDistance(origin, destination);

  const distanceValue = parseFloat(distance.replace(/[^0-9.]/g, ''));
  const durationValue = parseFloat(duration.replace(/[^0-9.]/g, ''));

  const fares = {
    motorcycle: distanceValue * 5, // Example fare calculation for motorcycle
    auto: distanceValue * 10, // Example fare calculation for auto
    car: distanceValue * 15 ,// Example fare calculation for car
    duration:duration
  };

  return fares;
}

module.exports.getFare = getFare;

module.exports.createRide = async ({ userId, origin, destination, vehicleType }) => {
  // console.log('in ride service', { userId, origin, destination, vehicleType });
  if (!origin || !destination || !vehicleType) {
    return { status: 404, message: "All fields are required" };
  }

  try {
    const fare = await getFare({ origin, destination });
    // console.log('Fare type:', typeof fare);
   
    // console.log('fare', fare);
    const ride = await rideModel.create({
      user: userId,
      origin,
      destination,
      otp: getOtp(4),
      fare: fare[vehicleType],
      status: 'pending', // Example status
      vehicleType
    });
    // console.log('ride', ride);
    return ride;
  } catch (error) {
    return { status: 500, message: "Error creating ride", error };
  }
}
