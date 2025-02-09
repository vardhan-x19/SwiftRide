const captainModel = require('../Models/captainModel');
const jwt = require('jsonwebtoken');
const blockedCaptainList = require('../Models/blockedCaptain');

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const isBlockedToken = await blockedCaptainList.findOne({ token: token });
  if (isBlockedToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.captain = captain;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};