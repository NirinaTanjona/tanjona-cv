import { styled } from '@mui/material/styles'

const Span = styled('span')<{
  color?: 'primary' | 'error' | 'success' | 'warning';
}>(({ theme }) => ({
  color: theme.palette.primary.main
}));

export default Span