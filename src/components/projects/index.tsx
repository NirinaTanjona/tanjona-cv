import { Container, Box, Typography, Grid, Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import SpaIcon from '@mui/icons-material/Spa';
import { darkTheme } from '../../theme'
import { Description } from './description'

const Projects = () => {
  return (
    <Box>
      <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h1" color="text.primary">Projects</Typography>
      </Box>
      <Container sx={{ my: 2 }}>
        <Grid container spacing={2} sx={{ alignItems: 'center', marginTop: 0}}>
          <Grid item xs>
            <Box maxWidth={500}>
            <Description />
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem>
            <Typography><SpaIcon /></Typography>
          </Divider>
          <Grid item xs>
            <Box
              component='img'
              alt='project demo'
              sx={{ width: '100%' }}
              src='/images/demo.gif'
            />
          </Grid>
        </Grid>
      </Container>
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
        <Container sx={{ py: { xs: 4, sm: 6, md: 8 }, alignItems: 'center'}}>
          <Projects/>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default ProjectsLayout