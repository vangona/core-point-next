import React from 'react';
import { Box } from '@mui/material';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import { LIGHT_BEIGE, OFF_WHITE_COLOR } from '@/constants/color';

interface SectionLayoutProps {
  height?: string;
  color?: 'white' | 'beige';
  children?: React.ReactNode;
}
const SectionLayout = (props: SectionLayoutProps) => {
  const { height = '600px', color, children } = props;
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
          paddingTop: 2,
          maxWidth: DEFAULT_LAYOUT_WIDTH,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SectionLayout;
