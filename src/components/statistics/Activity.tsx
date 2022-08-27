import { Paper, Stack, Typography, Box } from '@mui/material'

export const Activity = () => {
  return (
    <Paper variant='outlined' sx={{ minHeight: 214, width: '100%', display: 'flex', p: 2.5 }}>
      <Stack direction='column' sx={{ width: '100%' }}>
        <Stack direction='row' sx={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <Typography fontWeight="bold" component="h3" color="text.primary" variant="body2">
            Activity
          </Typography>
          <Typography color='text.secondary' variant='caption' fontWeight={500}>
            This year
          </Typography>
        </Stack>
        <Box>image</Box>
      </Stack>
    </Paper>
  )
}