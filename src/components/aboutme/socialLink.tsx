import { Stack } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, alpha } from '@mui/material/styles'

export const SocialLink = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const direction = matches ? "row" : "column"
  return (
    <Stack
    direction= {direction}
    spacing={1.5}
    sx={{
      '& a': {
        width: '100%',
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${
          theme.palette.mode === 'dark'
            ? theme.palette.primaryDark[700]
            : theme.palette.grey[200]
        }`,
        fontSize: theme.typography.pxToRem(14),
        fontWeight: 700,
        borderRadius: 1,
        transition: theme.transitions.create(['color', 'border-color']),
        '&:hover': {
          color:
            theme.palette.mode === 'dark'
              ? theme.palette.primary[300]
              : theme.palette.primary[500],
          borderColor:
            theme.palette.mode === 'dark'
              ? theme.palette.primaryDark[600]
              : theme.palette.grey[300],
          backgroundColor:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.primaryDark[700], 0.4)
              : theme.palette.grey[50],
        },
      },
    }}
  >
    <a
      href="https://github.com/NirinaTanjona"
      rel="noopener noreferrer sponsored"
      target="_blank"
    >
      <img
        width="auto"
        height="30px"
        src={`logos/Github-${theme.palette.mode}.png`}
        alt="Github"
        title="follow me on Github"
        loading="lazy"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/tanjona-randrianasolo-3210241a3/"
      rel="noopener noreferrer sponsored"
      target="_blank"
    >
      <img
        width="auto"
        height="20px"
        src="logos/linkedin.png"
        alt="doit-intl"
        title="Contact me in linkedin"
        loading="lazy"
      />
    </a>
    <a
      href="https://www.instagram.com/tanjonarandrianasolo/"
      rel="noopener noreferrer sponsored"
      target="_blank"
    >
      <img
        width="auto"
        height="35px"
        src="logos/instagram.png"
        alt="zesty.io"
        title="Contact me on insta"
        loading="lazy"
      />
    </a>
  </Stack>
  )
}