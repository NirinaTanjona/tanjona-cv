import { Typography, Paper, Box, Container, Stack} from '@mui/material'
import { SocialLink } from './socialLink'

const About = () => {
  return (
    <Stack direction="column" spacing={4}>
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
      I am an engineer in automation and industrial computing but I am especially passionate about IT in
      general, particularly in the field of web development, AI and any other innovative technology.
      </Typography>
    </Paper>
    <SocialLink />
    </Stack>
  )
}

const AboutLayout = () => {
  return (
    <Box>
      <Container id="about" maxWidth="md" sx={{ mb: 10 }}>
        <About/>
      </Container>
    </Box>
  )
}


export default AboutLayout