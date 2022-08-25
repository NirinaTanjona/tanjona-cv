import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getDesignTokens from '../theme'
import { PaletteMode } from '@mui/material'

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
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme({
    ...getDesignTokens(mode)
  }), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;