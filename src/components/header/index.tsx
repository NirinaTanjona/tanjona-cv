import { useContext } from 'react';
import { Box, IconButton, Typography, Stack, Avatar } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from '../../utils/ToggleColorMode'
import { styled } from '@mui/material/styles';

const Span = styled('span')<{
  color?: 'primary' | 'error' | 'success' | 'warning';
}>(({ theme }) => ({
  color: theme.palette.primary.main
}));

const Header = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{height: 150}}>
      <Stack>
        <Typography variant="h3">Hello,</Typography>
        <Typography variant="h3">I'm <Span>Tanjona</Span> Randrianasolo</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Box
        component="span"
        sx={{
          color: 'primary.main',
          p: 0,
        }}
      >
        <IconButton onClick={toggleColorMode} color='inherit'>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <Avatar alt="Tanjona" src="/images/tanjona.jpg"></Avatar>
      </Stack>
    </Stack>
  );
}

export default Header