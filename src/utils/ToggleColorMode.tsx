import React, { useState, useMemo, createContext, useEffect} from 'react';
import { deepmerge } from '@mui/utils'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens, getThemedComponents } from '../theme'
import { PaletteMode, useMediaQuery } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

interface Props {
  children: JSX.Element,
};

interface AppContext {
  mode: PaletteMode,
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
  toggleColorMode: () => void,
}

export const ColorModeContext = createContext<AppContext>({mode: 'light', setMode: () => {}, toggleColorMode: () => {}})

const ToggleColorMode: React.FC<Props> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const preferedMode = prefersDarkMode ? 'dark' : 'light'
  const [mode, setMode] = useState<PaletteMode>(preferedMode);

  const toggleColorMode = () => {
    setMode((prevMode) => {
      if (prevMode === 'light') {
        localStorage.setItem('mui-mode', 'dark')
        return 'dark'
      } else {
        localStorage.setItem('mui-mode', 'light')
        return 'light'
      }
    })
  };

  const theme = useMemo(() => {
    const designTokens = getDesignTokens(mode)
    let newTheme = createTheme(designTokens)
    newTheme = deepmerge(newTheme, getThemedComponents(newTheme))
    return newTheme;
  }, [mode])

  useEffect(() => {
    let initialMode = preferedMode
    try {
      initialMode = localStorage.getItem('mui-mode') || initialMode
    } catch (error) {
      // do nothing
    }
    setMode(initialMode as PaletteMode)
  }, [preferedMode])


  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;