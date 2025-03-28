const mongoose = require('mongoose');

const blockListTokenSchema = new mongoose.Schema({
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

const BlockListToken = mongoose.models.BlockListToken || mongoose.model('BlockListToken', blockListTokenSchema);

module.exports = BlockListToken;