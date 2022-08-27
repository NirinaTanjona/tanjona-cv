import Header from './components/header'
import About from './components/aboutme'
import Statistic from './components/statistics'
import Skills from './components/skills'
import { CssBaseline, Stack } from '@mui/material';

function App() {
  return (
    <Stack direction="column" spacing={5}>
      <CssBaseline />
      <Header />
      <About />
      <Statistic />
      <Skills />
    </Stack>
  )
}

export default App