import { Typography, Container, Box, Stack, Divider, Link, useMediaQuery} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Span from '../Span'
import { styled } from '@mui/material/styles';

const Root = styled('ul')(({ theme }) => ({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: theme.spacing(2),
  '& li': {
    margin: theme.spacing(0),
  },
}));

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
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const direction = matches ? "row" : "column"
  return (
  <Root>
  <Container>
  <Stack>
    <Stack direction={direction} spacing={2} sx={{ my: 2, display: 'flex', justifyContent: "space-between" }}>
      <Stack>
        <Box maxWidth={500}>
          <Typography sx={{ textAlign: 'start', my: 0}}>
            So this is my resume, if you are interested in working with me, you can mail me to
            {' '}
            <Link href="mailto:#tanjonawork@gmail.com">tanjonawork@gmail.com</Link>
            {' '}
            , and let's work
            together. <span>&#128513;</span>
          </Typography>
          </Box>
        </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="subtitle1">Topics</Typography>
        {localGroup.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} underline="hover" color="text.secondary">
              {label}
            </Link>
          </li>
        ))}
      </Stack>
      <Stack direction="column" spacing={1}>
      <Typography variant="subtitle1">Contacts</Typography>
        {externalGroup.map(({ href, label }) => (
          <li key={href}>
            <Link target="_blank" href={href} underline="hover" color="text.secondary">
            {label}
            </Link>
          </li>
        ))}
      </Stack>
    </Stack>



    <Divider />
    <Box
      sx={{
        display: 'flex',
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
  </Container>
  </Root>
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
      <Container sx={{ py: { xs: 4, sm: 6, md: 8 }, alignItems: 'center'}}>
        <Footer/>
      </Container>
    </Box>
  )
}

export default FooterLayout