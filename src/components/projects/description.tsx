import { Typography, Stack } from '@mui/material'
import Span from '../Span'

export const Description = () => {
  return (
    <Stack direction="column">
      <Typography variant="h2" sx={{ mb: 2 }}>
        A <Span>Plant</Span> disease detection app
      </Typography>
      <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
      </Typography>
      <Typography variant="subtitle1" sx={{ my: 1.5 }}>
        Usage
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </Typography>
    </Stack>
  )
}