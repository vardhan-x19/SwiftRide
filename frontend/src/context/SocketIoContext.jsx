import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketIoContext = createContext();

export const useSocket = () => {
  return useContext(SocketIoContext);
};

export const SocketIoProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const newSocket = io('http://localhost:4000'); // Ensure this URL is correct and the server is running
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to socket server');
      setConnected(true);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from socket server');
      setConnected(false);
    });

    return () => newSocket.close();
  }, []);

  const sendMessage = (eventName, message) => {
    if (socket) {
      socket.emit(eventName, message);
    }
  };

  const receiveMessage = (eventName, callback) => {
    if (socket) {
      socket.on(eventName, callback);
    }
  };

  return (
    <SocketIoContext.Provider value={{ connected, sendMessage, receiveMessage }}>
      {children}
    </SocketIoContext.Provider>
  );
};
