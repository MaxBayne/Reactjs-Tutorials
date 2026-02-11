import React, { useMemo ,useState,useEffect } from 'react';
import { AppThemeContext } from "@/contexts/AppThemeContext.js";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/themes/muiThemes';

const THEME_KEY = 'app-theme-mode';

export default function AppThemeProvider({ children }) 
{
  // 1️⃣ Read from localStorage ONCE
  const [mode, setMode] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'light';
  });

  

  const toggleTheme = () => 
  {
      setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // 2️⃣ Save to localStorage when mode changes
  useEffect(() => {
    localStorage.setItem(THEME_KEY, mode);
  }, [mode]);

   const theme = useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );

  
  return (
    <AppThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}
