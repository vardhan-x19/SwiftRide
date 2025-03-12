import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { SocketIoProvider } from './context/SocketIoContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <SocketIoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketIoProvider>
    </Provider>
  </StrictMode>
);
