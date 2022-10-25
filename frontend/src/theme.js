import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.

const purpleShade1 = '#3A0328';
const purpleShade2 = '#4E0435';
const purpleShade3 = '#610542';
const purpleShade4 = '#AF0878';
const purpleShade5 = '#D60A92';
const purpleShade6 = '#EA0BA0';
const purpleShade7 = '#F529B1';
const purpleShade8 = '#F863C6';

const orangeShade1 = '#523C00';
const orangeShade2 = '#7A5A00';
const orangeShade3 = '#8F6900';
const orangeShade4 = '#B88700';
const orangeShade5 = '#EOA500';
const orangeShade6 = '#FFBE0B';
const orangeShade7 = '#FFC933';
const orangeShade8 = '#FFD970';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EA0BA0',
    },
    secondary: {
      main: '#FFC31F',
    },
    error: {
      main: red.A400,
    },
    common: {
      white: '#ffffff',
      black: '#474747',
      purpleShade1,
      purpleShade2,
      purpleShade3,
      purpleShade4,
      purpleShade5,
      purpleShade6,
      purpleShade7,
      purpleShade8,
      orangeShade1,
      orangeShade2,
      orangeShade3,
      orangeShade4,
      orangeShade5,
      orangeShade6,
      orangeShade7,
      orangeShade8,
    },
  },

  typography: {
    h1: {
      fontSize: '4.5rem',
      fontFamily: 'Montserrat',
      // fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '3rem',
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '2rem',
      // fontWeight: 300,
    },
    h4: {
      fontFamily: 'Montserrat',
      // fontWeight: 700,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      // fontWeight: 700,
    },
    h6: {
      fontFamily: 'Montserrat',
      fontSize: '1rem',
    },
    body1: {
      fontFamily: 'Montserrat',
      fontSize: '0.8rem',
    },
    body2: {
      fontFamily: 'Montserrat',
      fontSize: '1.0rem',
    },
  },
  overrides: {
    MuiChip: {
      root: {
        // backgroundColor: greenBlue,
      },
      label: {
        fontFamily: 'Montserrat',
        fontSize: '1.5rem',
        color: '#fff',
        // fontWeight: 400,
      },
    },
    '.MuiTextField-root': {
      fontFamily: 'Montserrat',
    },
  },
});

export default theme;
