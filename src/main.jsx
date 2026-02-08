import './styles/main.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import AppThemeProvider from './contexts/AppThemeProvider.jsx'
import UserProvider from './contexts/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AppThemeProvider> 
      <UserProvider>
        <App />
      </UserProvider>
     </AppThemeProvider>
     </BrowserRouter>
  </React.StrictMode>
)
