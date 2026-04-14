// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './styles/global.css';   // your existing CSS variables go here

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "pk_live_Y2xlcmsuYXN0cm9tYXlhLm1lJA";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
    </HelmetProvider>
  </React.StrictMode>
);
