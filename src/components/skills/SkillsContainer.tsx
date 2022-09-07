import { Grid, Box, Typography } from '@mui/material'
import { SkillCard } from './SkillCard'

export interface Skills {
  src: string,
  srcSet: string,
  name: string,
  description: string
}

interface Props {
  skillsList: Skills[],
  title: String
}

export const SkillsContainer = ({ skillsList, title }: Props ) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
        <Typography
          fontWeight="bold"
          component="h3"
          color="primary"
          variant="body2"
        >
        {title}
        </Typography>
      </Box>
      <Grid container justifyContent="start" spacing={{ xs: 2, md: 4}}>
          {skillsList.map((item) => (
          <Grid item xs={12} sm={6} md={4}>
            <SkillCard logoSize={64} item={item}/>
          </Grid>
        ))
        }
      </Grid>
    </Box>
  )
}