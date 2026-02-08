import { createTheme } from '@mui/material/styles';
import { blue, purple, red, green, grey } from '@mui/material/colors';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: blue[600],
      light: blue[400],
      dark: blue[800],
    },

    secondary: {
      main: purple[500],
    },

    success: {
      main: green[600],
    },

    error: {
      main: red[600],
    },

    background: {
      default: grey[100],
      paper: '#ffffff',
    },

    text: {
      primary: grey[900],
      secondary: grey[700],
    },

    divider: grey[300],
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: blue[300],
      light: blue[200],
      dark: blue[500],
    },

    secondary: {
      main: purple[300],
    },

    success: {
      main: green[400],
    },

    error: {
      main: red[400],
    },

    background: {
      default: '#0f1214',
      paper: '#181c20',
    },

    text: {
      primary: '#ffffff',
      secondary: grey[400],
    },

    divider: '#2a2f36',
  },
});
