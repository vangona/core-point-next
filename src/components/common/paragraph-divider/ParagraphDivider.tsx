'use client';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import type { SxProps } from '@mui/material';

interface ParagraphDividerProps {
  sx?: SxProps;
  variant?: 'default' | 'left' | 'right';
}
const ParagraphDivider = (props: ParagraphDividerProps) => {
  const { sx, variant = 'default' } = props;
  const theme = useTheme();
  const isLeft = variant === 'left';
  const isRight = variant === 'right';

  const dividerSx: SxProps = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    ...sx,
  };

  const lineSx: SxProps = {
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.divider,
  };

  return (
    <Box sx={dividerSx}>
      {!isLeft && <Box sx={lineSx}></Box>}
      {isRight && (
        <Image src='/KeyIconLeft.svg' width={28} height={10} alt='Key Icon' />
      )}
      {!isRight && (
        <Image src='/KeyIconRight.svg' width={28} height={10} alt='Key Icon' />
      )}
      {!isRight && <Box sx={lineSx}></Box>}
    </Box>
  );
};

export default ParagraphDivider;
