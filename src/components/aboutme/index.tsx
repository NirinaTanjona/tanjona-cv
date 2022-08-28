import { Typography, Paper, Box, Container} from '@mui/material'

const About = () => {
  return (
    <Paper variant="outlined" sx={{ p: 2.5, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography
          fontWeight="bold"
          component="h3"
          color="text.primary"
          variant="body2"
        >
        About me
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        Follow the video tutorial above. Understand how to use each tool in the Figma application.
        Also learn how to make a good and correct design. Starting from spacing, typography, content,
        and many other design hierarchies. Then try to make it yourself with your imagination
        and inspiration.
      </Typography>
    </Paper>
  )
}

const AboutLayout = () => {
  return (
    <Box>
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <About/>
      </Container>
    </Box>
  )
}


export default AboutLayout