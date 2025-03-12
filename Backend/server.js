const http = require('http');
require('dotenv').config();
const app = require('./app');
const { initializeSocket } = require('./socket');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

// Initialize socket
initializeSocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

