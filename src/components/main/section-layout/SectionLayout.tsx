'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import { LIGHT_BEIGE, OFF_WHITE_COLOR } from '@/constants/color';
import type { SxProps } from '@mui/system';

interface SectionLayoutProps {
  height?: string;
  color?: 'white' | 'beige';
  children?: React.ReactNode;
  sx?: SxProps;
}
const SectionLayout = (props: SectionLayoutProps) => {
  const { height, color, children, sx } = props;
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    LARGE_LAYOUT_WIDTH,
  );

  useEffect(() => {
    if (isUpLarge) {
      setLayoutWidth(LARGE_LAYOUT_WIDTH);
      return;
    }

    if (isMedium) {
      setLayoutWidth(MEDIUM_LAYOUT_WIDTH);
      return;
    }

    setLayoutWidth(SMALL_LAYOUT_WIDTH);
  }, [isUpLarge, isMedium]);

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
          maxWidth: layoutWidth,
          height: height,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isDownMedium ? 2 : 5,
          marginBottom: isDownMedium ? 2 : 5,
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SectionLayout;
