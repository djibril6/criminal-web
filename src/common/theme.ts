import { createTheme } from '@mui/material';

/**
 * TODO - create a hook for calculating the ration
 * ratio = size-of-the-screen / 960
 * 960 is the size in the provided UX design  #d40000
 */

export const customTheme = {
  borderRadius: 30,
  padding: 10,
  ratio: 1.33,
  color: {
    shadowColor: '#888888',
    grey: '#E8E8E8',
    darkGrey: '#808080',
    blue: '#3f3d56',
    blueLight: '#CFE5F0',
    orange: '#F7901E',
    orangeLight: '#FEEFDF',
    red: '#fc5959',
    yellow: '#c2824c',
    green: '#53be73',
    cardBackground: '#000000',
    cardBorder: '#ffffff',
  },
};

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const appTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  typography: {
    fontWeightBold: 700,
    fontFamily: 'Poppins',
    h1: {
      fontSize: '20px',
      fontWeight: 'bold',
      lineHeight: '1.5rem',
    },
    h2: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '1.375rem',
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.25rem',
    },
    h4: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: '1.125rem',
    },
    h5: {
      fontSize: '27px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '1.875rem',
    },
    body2: {
      fontSize: '12px',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '3.25rem',
      fontWeight: 900,
      fontFamily: 'PoppinsBold',
      lineHeight: '4rem',
    },
    subtitle2: {
      fontSize: '10px',
      fontWeight: 500,
      lineHeight: '15px',
    },
  },
  palette: {
    primary: {
      main: customTheme.color.blue,
      light: customTheme.color.blueLight,
    },
    secondary: {
      main: customTheme.color.yellow,
      light: customTheme.color.orangeLight,
    },
    error: {
      main: customTheme.color.red,
    },
    success: {
      main: customTheme.color.green,
    },
    text: {
      primary: customTheme.color.blue,
      secondary: customTheme.color.orange,
      disabled: customTheme.color.grey,
    },
    background: {
      default: '#FFFFFF',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
});

export default appTheme;
