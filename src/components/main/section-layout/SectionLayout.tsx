import React from 'react';
import Box from '@mui/material/Box';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import { LIGHT_BEIGE, OFF_WHITE_COLOR } from '@/constants/color';
import type { SxProps } from '@mui/system';

interface SectionLayoutProps {
  height?: string;
  color?: 'white' | 'beige';
  children?: React.ReactNode;
  sx?: SxProps;
  innerSx?: SxProps;
}
const SectionLayout = (props: SectionLayoutProps) => {
  const { height, color, children, sx, innerSx } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: color === 'white' ? OFF_WHITE_COLOR : LIGHT_BEIGE,
      }}
    >
      <Box
        component='section'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: height,
          alignItems: 'center',
          padding: 5,
          marginBottom: 5,
          maxWidth: DEFAULT_LAYOUT_WIDTH,
          ...sx,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            ...innerSx,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default SectionLayout;
