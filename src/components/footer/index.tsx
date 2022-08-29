import { Typography, Container, Box, Stack, Divider, Link } from '@mui/material'
import Span from '../Span'

const localGroup: {href: string, label: string}[] = [
  {
    href: '#header',
    label: 'Home',
  },
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#skill',
    label: 'Skills',
  },
  {
    href: '#project',
    label: 'Projects',
  },
]

const externalGroup: {href: string, label: string}[] = [
  {
    href: 'https://web.facebook.com/tanjona.randrianasolo12',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/tanjonarandrianasolo',
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/tanjona-randrianasolo-3210241a3/',
    label: 'Linkedin',
  },
  {
    href: 'https://github.com/NirinaTanjona',
    label: 'github',
  },
]

const Footer = () => {
  return (
  <Stack direction="column">
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4" sx={{ textAlign: 'justify'}}>
        <p>This is my resume, if you are interested, mail me to
        {' '}
        <Link href="mailto:#tanjonawork@gmail.com">
          tanjonawork@gmail.com
        </Link>{' '}
        and let's work
        together. <span>&#128513;</span>
        </p>
      </Typography>
    </Box>
    <Stack direction="row" spacing={40} sx={{ mb: 2, display: 'flex', justifyContent: 'space-around'}}>
      <Stack direction="column" spacing={1}>
        {localGroup.map(({ href, label }) => (
          <Link key={href} href={href} underline="hover" color="text.secondary">
            {label}
          </Link>
        ))}
      </Stack>
      <Stack direction="column" spacing={1}>
        {externalGroup.map(({ href, label }) => (
          <Link target="_blank" key={href} href={href} underline="hover" color="text.secondary">
            {label}
          </Link>
        ))}
      </Stack>
    </Stack>

    <Divider />
    <Box
      sx={{
        display: 'flex',
        alignItems: "end",
        justifyContent: 'center',
        mt: 2
      }}
      >
        <Typography color="text.secondary">
          ©{' '}
          <Span>
            {new Date().getFullYear()}
          </Span>{' '}
          Tanjona Randrianasolo
        </Typography>
      </Box>
  </Stack>
  )
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