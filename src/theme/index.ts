import { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import 'cal-sans'

declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    primaryDark: PaletteColor;
  }
}

export const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  main: '#007FFF',
  500: '#007FFF',
  600: '#0072E5', // vs blueDark 900: WCAG 4.6 AAA (large), APCA 36 Not for reading text
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};
export const blueDark = {
  50: '#E2EDF8',
  100: '#CEE0F3',
  200: '#91B9E3',
  300: '#5090D3',
  main: '#5090D3',
  400: '#265D97',
  500: '#1E4976',
  600: '#173A5E',
  700: '#132F4C', // contrast 13.64:1
  800: '#001E3C',
  900: '#0A1929',
};
export const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7', // vs blueDark 900: WCAG 11.6 AAA, APCA 78 Best for text
  400: '#B2BAC2', // vs blueDark 900: WCAG 9 AAA, APCA 63.3 Ok for text
  500: '#A0AAB4', // vs blueDark 900: WCAG 7.5 AAA, APCA 54.3 Only for large text
  600: '#6F7E8C', // vs white bg: WCAG 4.1 AA, APCA 68.7 Ok for text
  700: '#3E5060', // vs white bg: WCAG 8.3 AAA, APCA 88.7 Best for text
  800: '#2D3843', // vs white bg: WCAG 11.9 AAA, APCA 97.3 Best for text
  900: '#1A2027',
};

const defaultTheme = createTheme()
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...blue,
      ...(mode === 'dark' && {
        main: blue[400],
      }),
    },
    primaryDark: blueDark,
    ...(mode === 'dark' && {
      background: {
        default: blueDark[900],
        paper: blueDark[700],
      },
    }),
    ...(mode === 'light' && {
      text: {
        primary: grey[900],
        secondary: grey[700],
      },
    }),
    ...(mode === 'dark' && {
      text: {
        primary: '#fff',
        secondary: grey[400],
      },
    }),
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 10,
  typography: {
    fontFamily: [
      'inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontFamily: 'Cal Sans',
      letterSpacing: 1,
      fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
      fontWeight: 800,
      lineHeight: 78 / 70,
      color: mode === 'dark' ? '#ffffff' : grey[800],
    },
    h2: {
      fontFamily: 'Cal Sans',
      letterSpacing: 1,
      fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
      fontWeight: 800,
      lineHeight: 44 / 36,
      color: mode === 'dark' ? '#ffffff' : grey[800],
    },
    h3: {
      fontFamily: 'Cal Sans',
      letterSpacing: 1,
      fontSize: defaultTheme.typography.pxToRem(36),
      lineHeight: 44 / 36,
      color: mode === 'dark' ? '#ffffff' : grey[800],
    },
    h4: {
      fontFamily: 'Cal Sans',
      letterSpacing: 1,
      fontSize: defaultTheme.typography.pxToRem(28),
      lineHeight: 42 / 28,
      color: mode === 'dark' ? '#ffffff' : grey[800],
    },
    h5: {
      fontFamily: 'Cal Sans',
      letterSpacing: 1,
      fontSize: defaultTheme.typography.pxToRem(24),
      lineHeight: 36 / 24,
      color: mode === 'dark' ? '#ffffff' : grey[800],
    },
    h6: {
      letterSpacing: 1,
      fontFamily: 'Cal Sans',
      fontSize: defaultTheme.typography.pxToRem(20),
      lineHeight: 30 / 20,
      color: mode === 'dark' ? '#ffffff' : grey[800],
    },
    body1: {
      fontSize: defaultTheme.typography.pxToRem(15), // 15px
      lineHeight: 24 / 16,
      letterSpacing: 0,
      color: mode === 'dark' ? '#ffffff' : grey[800],
    },
    subtitle1: {
      fontFamily: 'Cal Sans',
      fontSize: defaultTheme.typography.pxToRem(15), // 16px
      letterSpacing: 1,
    }
  }
})

export const darkTheme = createTheme({
  ...getDesignTokens('dark')
})