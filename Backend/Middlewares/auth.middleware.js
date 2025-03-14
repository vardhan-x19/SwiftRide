const bcrypt = require('bcrypt');
const userModel = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const BlockedListToken = require('../Models/blockListToken');

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  console.log('tokenfromauthuser', token);
  if (!token) {
    console.log('!token');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const isBlockedToken = await BlockedListToken.findOne({ token: token });
  if (isBlockedToken) {
    console.log('!blocked');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    if (!user) {
      console.log('!user');
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log('!err');
    return res.status(401).json({ message: 'Unauthorized', err });
  }
};
