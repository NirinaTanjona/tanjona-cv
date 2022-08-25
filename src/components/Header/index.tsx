import { useContext } from 'react';
import { Box, IconButton, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from '../../utils/ToggleColorMode'

const Header = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <div>
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
    <Typography variant="h2">This should be styled</Typography>
    <Typography>This regular font should be styled</Typography>
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.secondary',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      This is a socond box
    </Box>
    </div>
  );
}

export default Header