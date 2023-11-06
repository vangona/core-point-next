import type { SxProps } from '@mui/material';

export const hoverSx: SxProps = {
  transition: '0.1s all linear',
  '&:hover': {
    transform: 'scale(1.02)',
    cursor: 'pointer',
  },
};
