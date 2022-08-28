import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Skills } from './SkillsContainer'

interface Props {
  item: Skills,
  logoSize?: number | string
}

export const SkillCard = ({
  item,
  logoSize = 40,
}: Props ) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        display: 'flex',
        height: '100%',
      }}
    >
      <Avatar
        {...({ src: item.src, srcSet: item.src, alt: `${item.name} logo` })}
        sx={{ borderRadius: '4px', width: logoSize, height: logoSize }}
      />
      <Box sx={{ ml: 2 }}>
        <Typography variant="body2" fontWeight="bold">
          {item.name}{' '}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </Box>
    </Paper>
  );
}