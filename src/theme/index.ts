import { PaletteMode, Box} from '@mui/material'
import { createTheme} from '@mui/material/styles'
import { grey } from '@mui/material/colors';
import 'cal-sans'

const defaultTheme = createTheme()
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: '#3f50b5',
      purple: '#546fff',
    },
    background: {
      secondary: '#f5f5f7',
    },
    ...(mode === 'dark' && {
      background: {
        default: '#1a202c',
        paper: '#1a202c',
        secondary: '#2d3748'
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            secondary: "#54577a",
          }
        : {
            secondary: "#d8d8d8",
          }),
    },
  },
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
      fontSize: defaultTheme.typography.pxToRem(16), // 16px
      lineHeight: 24 / 16,
      letterSpacing: 0,
      color: mode === 'dark' ? '#ffffff' : grey[800],
    },
  },
})