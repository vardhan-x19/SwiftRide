const socketIO = require('socket.io');
const userModel = require('./Models/UserModel.js');
const captainModel = require('./Models/captainModel.js');
let io;

const initializeSocket = (server) => {
  io = socketIO(server, {
    cors: {
      origin: ["http://localhost:5173", "https://ktpsfwfv-5173.inc1.devtunnels.ms"], // Allow both origins
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);
    socket.on('join', async (data) => {
      const { userId, userType } = data;
      console.log('User joined:', userId, userType);
      if (userType === 'user') {
        await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
      } else if (userType === 'captain') {
        await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
      }
    });

    socket.on('update-captain-location', async (data) => {
      const { captainId, ltd, lng } = data;
      console.log('Update captain location:', captainId, ltd, lng);
      if (!captainId || !ltd || !lng) {
        console.error('Invalid location data:', location);
        return;
      }
    
      await captainModel.findByIdAndUpdate(captainId, { 
        location: {
          ltd: ltd,
          lng: lng
        }
      });
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};

const sendMessageToSocketId = (socketId, messageObj) => {
  console.log('Sending message to:', socketId, messageObj);
  if (io) {
    io.to(socketId).emit(messageObj.event, messageObj.data);
  } else {
    console.error('Socket.io is not initialized.');
  }
};

module.exports = {
  initializeSocket,
  sendMessageToSocketId,
};
