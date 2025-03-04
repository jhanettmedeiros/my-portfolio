import { createTheme, responsiveFontSizes } from '@mui/material/styles'; // Correção na importação

let theme = createTheme({
  palette: {
    primary: {
      main: '#646464',
    },
    secondary: {
      main: '#E44F9C',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", sans-serif',
  }
});

theme = responsiveFontSizes(theme);

export default theme;
