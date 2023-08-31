import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReservationContextProvider } from './context/ReservationContext';
import { EmployeeContextProvider } from './context/EmployeeContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ReservationContextProvider>
        <EmployeeContextProvider>
          <App />
        </EmployeeContextProvider>
      </ReservationContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)