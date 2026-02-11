//import styles
import './styles/main.css'
import './styles/fonts.css';

//import react library
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

//import context providers
import AppThemeProvider from './contexts/AppThemeProvider.jsx'
import UserProvider from './contexts/UserProvider.jsx'
import ToastProvider from './contexts/ToastProvider.jsx'



//import custom components
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AppThemeProvider> 
      <UserProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </UserProvider>
     </AppThemeProvider>
     </BrowserRouter>
  </React.StrictMode>
)
