// import React, { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import AuthProvider from './contexts/auth/Provider';

import './index.css';

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
