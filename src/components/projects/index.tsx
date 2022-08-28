import { Container, Box, Typography } from '@mui/material'
import { darkTheme } from '../../theme'
import { ThemeProvider } from '@mui/material/styles'

const Projects = () => {
  return (
    <Box>
      <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h1" color="text.primary">Projects</Typography>
      </Box>
    </Box>
  )
}

const ProjectsLayout = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          background: (theme) =>
            `linear-gradient(85deg, ${theme.palette.primaryDark[700]} 0%, ${theme.palette.primaryDark[600]} 100%)`,
          }}
      >
        <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6, md: 8 }, alignItems: 'center'}}>
          <Projects/>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default ProjectsLayout