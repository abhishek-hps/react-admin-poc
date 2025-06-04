// theme.ts
import { createTheme } from '@mui/material/styles';

export const customDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1e2633',
      paper: '#1e2633',
    },
    primary: {
      main: '#00ff66',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, sans-serif',
    h5: {
      fontWeight: 500,
    },
  },
});
