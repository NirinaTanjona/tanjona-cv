import { Chip } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
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
  '& .MuiChip-root .MuiChip-iconSmall': {
    marginLeft: 4,
  },
}));

export const ChipGithub = () => {
  return (
    <Root>
      <li>
        <Chip
          clickable
          role={undefined}
          component="a"
          size="small"
          variant="outlined"
          rel="nofollow"
          href="https://github.com/NirinaTanjona/Plant-disease-detector"
          target="_blank"
          icon={<GitHubIcon />}
          label="Source code"
        />
      </li>
    </Root>

  )
}