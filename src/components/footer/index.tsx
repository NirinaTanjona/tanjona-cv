import { Typography, Container, Box } from '@mui/material'

const Footer = () => {
  return <Typography>Footer</Typography>
}

const FooterLayout = () => {
  return (
    <Box
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? `${theme.palette.primaryDark[900]}`
            : `#FFFFFF`,
      }}
    >
      <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6, md: 8 }, alignItems: 'center'}}>
        <Footer/>
      </Container>
    </Box>
  )
}

export default FooterLayout