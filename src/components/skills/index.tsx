import { Typography, Box, Container } from '@mui/material'

const SkillLayout = () => {
  return (
    <Box
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${theme.palette.primaryDark[900]} 0%, #001E3C 100%)`
            : `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #FFFFFF 100%)`,
      }}
    >
      <Container sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Skills/>
      </Container>
    </Box>
  )
}

const Skills = () => {
  return (
    <Box>
      <Typography variant="h1">test</Typography>
    </Box>
  )
}

export default SkillLayout