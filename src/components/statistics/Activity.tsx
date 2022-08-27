import { Stack, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const Activity = () => {
  const theme = useTheme();
  return (
    <Box  sx={{
      minHeight: 214,
      width: '100%',
      display: 'flex',
      p: 2.5,
      border: `1px solid ${theme.palette.mode === 'dark' ? '#ffffff1f' : '#0000001f'}`,
      borderRadius: `0px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px`
      }}
    >
      <Stack direction='column' spacing={2.5} sx={{ width: '100%'}}>
        <Stack direction='row' sx={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <Typography fontWeight="bold" component="h3" color="text.primary" variant="body2">
            Activity
          </Typography>
          <Typography color='text.secondary' variant='caption' fontWeight={500}>
            This year
          </Typography>
        </Stack>
        <Box
          component='img'
          alt='Github activity status bar'
          sx={{width: '100%'}}
          src='/images/activityBar.png'
        />
      </Stack>
    </Box>
  )
}