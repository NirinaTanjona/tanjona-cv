import Header from './components/header'
import About from './components/aboutme'
import { CssBaseline, Container, Stack } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={5}>
        <CssBaseline />
        <Header />
        <About />
      </Stack>
    </Container>
  )
}

export default App