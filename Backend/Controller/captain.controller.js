const captainModel = require('../Models/captainModel');
const { validationResult } = require('express-validator');
const captainService = require('../services/captainService');

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, status, vehicle } = req.body;
  const { firstname, lastname } = fullname;
  const { color, plate, capacity, vehicleType } = vehicle;
  
  const isCapatainExist = await captainModel.findOne({ email });
  if(isCapatainExist) {
    return res.status(400).json({ error: 'Captain already exists'});
  }
  
  try {
    const user = await captainService.registerService({ firstname, lastname, email, password, status, color, plate, capacity, vehicleType });
    const token = user.generateAuthToken();
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};