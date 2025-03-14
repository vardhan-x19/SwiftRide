import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketIoContext = createContext();

export const useSocket = () => {
  return useContext(SocketIoContext);
};

export const SocketIoProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const newSocket = io('http://localhost:4000'); // Ensure this URL is correct and the server is 
  useEffect(() => {
 
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

 

  return (
    <SocketIoContext.Provider value={{ connected,newSocket}}>
      {children}
    </SocketIoContext.Provider>
  );
};
