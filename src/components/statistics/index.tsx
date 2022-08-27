import { Stack } from '@mui/material'
import { TopLangage } from './TopLangage'
import { Activity } from './Activity'

const Statistic = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <TopLangage />
      <Activity />
    </Stack>
  )
}

export default Statistic