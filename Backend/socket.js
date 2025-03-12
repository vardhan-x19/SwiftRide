const socketIO = require('socket.io');
const userModel = require('./Models/UserModel.js');
const captainModel = require('./Models/captainModel.js');
let io;

const initializeSocket = (server) => {
  io = socketIO(server, {
    cors: {
      origin: "http://localhost:5173", // Update to match your frontend URL
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);
    socket.on('join', async (data) => {
      const { userId, userType } = data;
      if (data.type === 'user') {
        await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
      } else if (data.type === 'captain') {
        await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
      }
    });
    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};

const sendMessageToSocketId = (socketId, message) => {
  if (io) {
    io.to(socketId).emit('message', message);
  } else {
    console.error('Socket.io is not initialized.');
  }
};

module.exports = {
  initializeSocket,
  sendMessageToSocketId,
};
