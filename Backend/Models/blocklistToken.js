const mongoose = require('mongoose');

const blocklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // 24 hours in seconds
  }
});

const BlocklistToken = mongoose.model('BlocklistToken', blocklistTokenSchema);

module.exports = BlocklistToken;