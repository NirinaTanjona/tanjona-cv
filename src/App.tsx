import Header from './components/header'
import About from './components/aboutme'
import Statistic from './components/statistics'
import Skills from './components/skills'
import Projects from './components/projects'
import { CssBaseline, Stack } from '@mui/material';

function App() {
  return (
    <Stack direction="column">
      <CssBaseline />
      <Header />
      <About />
      <Statistic />
      <Skills />
      <Projects />
    </Stack>
  )
}

export default App