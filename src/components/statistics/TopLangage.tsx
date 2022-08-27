import { Box, Typography, Card } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import 'cal-sans'
import CircularProgress, {CircularProgressProps} from '@mui/material/CircularProgress'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    gradient: true;
  }
}

const primary = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  main: '#007FFF', // contrast 3.83:1
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number },
) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} size={70}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const defaultTheme = createTheme()
export const theme = createTheme({
  palette: { mode: 'dark', primary },
  shape: {
    borderRadius: 10,
  },
  spacing: 10,
  typography: {
    fontFamily: ['inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'].join(','),
    body2: {
      fontSize: defaultTheme.typography.pxToRem(16), // 16px
      fontFamily: 'Cal Sans',
      lineHeight: 1.2,
      letterSpacing: '1px',
      fontWeight: 700,
    },
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: `linear-gradient(to right bottom, ${primary.main}, ${primary[700]} 120%)`,
            boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
          },
        },
      ],
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: 'rgba(123, 255, 255, 0.42)'
        },
      },
    },
  },
});

export const TopLangage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card variant="gradient" sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 235,
        minHeight: 214,
        p: 2.5,
        borderRadius: `${theme.shape.borderRadius}px 0px 0px ${theme.shape.borderRadius}px`,
      }}
      >
        <Box
          sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <Typography variant="body2">
          Top langage used
          </Typography>

        </Box>
        <Box sx={{
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CircularProgressWithLabel value={70}/>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Typography>Typescript</Typography>
        </Box>
      </Card>
    </ThemeProvider>
  )
}