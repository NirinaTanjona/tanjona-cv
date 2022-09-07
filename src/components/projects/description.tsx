import { Typography, Stack } from '@mui/material'
import Span from '../Span'
import { ChipGithub } from './ChipGithub'

export const Description = () => {
  return (
    <Stack direction="column">
      <Typography variant="h2" sx={{ mb: 2 }}>
        A <Span>Plant</Span> disease detection app
      </Typography>
      <Typography>
        This is my graduation project, it is based on plant's leaf disease detection using deep learning.
        the library used is tensorflow, the model is then deployed in flask backend and React for the UI.
      </Typography>
      <Typography variant="subtitle1" sx={{ my: 1.5 }}>
        Usage
      </Typography>
      <Typography>
        Take a clear photo of the leaf of a diseased plant and press the button detect desease. But take note
        that this is still a prototype and the number of disease in the model is limited
      </Typography>
      <ChipGithub />
    </Stack>
  )
}