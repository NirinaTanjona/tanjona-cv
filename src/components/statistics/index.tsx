import { Grid, Box, Container } from '@mui/material'
import { TopLangage } from './TopLangage'
import { Activity } from './Activity'

const Statistic = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TopLangage />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Activity />
      </Grid>
    </Grid>
  )
}

const StatisticLayout = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Statistic/>
      </Container>
    </Box>
  )
}

export default StatisticLayout