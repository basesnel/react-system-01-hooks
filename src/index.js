import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import AuthProvider from './contexts/auth/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
  <BrowserRouter basename="/react-system-01-hooks">
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
  // </StrictMode>
);
