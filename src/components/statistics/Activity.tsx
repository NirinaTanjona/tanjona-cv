import { Stack, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Activity = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const borderRadius = theme.shape.borderRadius
  return (
    <Box  sx={{
      height: '100%',
      width: '100%',
      display: 'flex',
      p: 2.5,
      border: `1px solid ${theme.palette.mode === 'dark' ? '#ffffff1f' : '#0000001f'}`,
      borderRadius: matches ? ` 0px 0px ${borderRadius}px ${borderRadius}px` : `0px ${borderRadius}px ${borderRadius}px 0px`
      }}
    >
      <Stack spacing={2} sx={{ width: '100%'}}>
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