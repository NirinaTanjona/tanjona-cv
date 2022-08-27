import { Stack, Box, Container } from '@mui/material'
import { TopLangage } from './TopLangage'
import { Activity } from './Activity'

const Statistic = () => {
  return (
    <Stack direction="row" spacing={2}>
      <TopLangage />
      <Activity />
    </Stack>
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