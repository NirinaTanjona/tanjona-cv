import React, { useState, useMemo, createContext } from 'react';
import { deepmerge } from '@mui/utils'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens, getThemedComponents } from '../theme'
import { PaletteMode, useMediaQuery } from '@mui/material'

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
  const prefersDarkMode = useMediaQuery('(preferes-color-scheme: dark)')
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => {
    const designTokens = getDesignTokens(mode)
    let newTheme = createTheme(designTokens)
    newTheme = deepmerge(newTheme, getThemedComponents(newTheme))
    return newTheme;
  }, [mode])

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;