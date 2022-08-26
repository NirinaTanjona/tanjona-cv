import { Typography, Stack} from '@mui/material'

const About = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        p: 3,
        backgroundColor: 'background.secondary',
        borderRadius: '10px'
      }}
      >
      <Typography variant="h6">About me</Typography>
      <Typography>
        Follow the video tutorial above. Understand how to use each tool in the Figma application.
        Also learn how to make a good and correct design. Starting from spacing, typography, content,
        and many other design hierarchies. Then try to make it yourself with your imagination
        and inspiration.
      </Typography>
    </Stack>
  )
}

export default About