const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Captain',
  
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  fare: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    
  },
  duration: {
    type: Number,
    
  },
  status: {
    type: String,
    enum: ['pending', 'ongoing', 'completed', 'cancelled'],
    default: 'pending'
  },
  paymentID: {
    type: String,
  
  },
  orderId: {
    type: String,
   
  },
  signature: {
    type: String,
  
  }
  ,
  otp:{
    type:String,
    selected:false
  }
}, {
  timestamps: true
});

const Ride = mongoose.model('ride', rideSchema);

module.exports = Ride;