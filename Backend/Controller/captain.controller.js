const captainModel = require('../Models/captainModel');
const { validationResult } = require('express-validator');
const blockedCaptainList = require('../Models/blockedCaptain');
const captainService = require('../services/captainService');

//captain register
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

//captain login
module.exports.loginCaptain = async (req, res, next) => {
  const err=validationResult(req);

  if(!err.isEmpty()){
    return res.status(400).json({ errors: err.array() });
  }
  const {email,password} = req.body;
  
  const captain=await captainModel.findOne({ email }).select('+password');

  if(!captain){
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const isMatch=await captain.comparePassword(password);

  if(!isMatch){
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token=captain.generateAuthToken();

  res.cookie('token', token, { httpOnly: true });

  return res.status(200).json({ token, captain });
}

//captain profile
module.exports.captainProfile=async(req,res,next)=>{
  return res.status(200).json({ captain: req.captain });
}

//capatin logout
module.exports.logoutCaptain=async(req,res,next)=>{
  res.clearCookie('token');
  const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
  if(!token){
    return res.status(401).json({ error: 'Unauthorized' });
  }
  await blockedCaptainList.create({ token });
  return res.status(200).json({ message: 'Logout successfully' });
}