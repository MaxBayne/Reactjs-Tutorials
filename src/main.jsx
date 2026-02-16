//import styles
import './styles/main.css'
import './styles/fonts.css';

//import react library
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

//import context providers
import AppThemeProvider from './providers/AppThemeProvider.jsx'
import UserProvider from './providers/UserProvider.jsx'
import ToastProvider from './providers/ToastProvider.jsx'



//import custom components
import App from './App.jsx'

// import i18n (needs to be bundled ;)) 
import './i18n';


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
