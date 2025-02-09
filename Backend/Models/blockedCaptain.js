const mongoose = require('mongoose');

const blockedCaptainSchema = new mongoose.Schema({
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

const blockedCaptainList = mongoose.models.BlockedCaptain || mongoose.model('BlockedCaptain', blockedCaptainSchema);

module.exports = blockedCaptainList;