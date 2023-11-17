'use client';

import React from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';
import FabGroup from '@/components/common/fab-group/FabGroup';
import { OFF_WHITE_COLOR } from '@/constants/color';
import { CorePointRoutes } from '@/constants/routes';
import GeneralFooter from './GeneralFooter';
import GeneralHeader from './GeneralHeader';
import GeneralHero from './GeneralHero';

interface GeneralLayoutInterface {
  children: React.ReactNode;
}
const GeneralLayout = (props: GeneralLayoutInterface) => {
  const { children } = props;
  const theme = useTheme();
  const pathname = usePathname();
  const disableHero = pathname.includes(CorePointRoutes.STORE + '/');

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: OFF_WHITE_COLOR,
      }}
    >
      <GeneralHeader />
      {!disableHero && <GeneralHero />}
      <FabGroup />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          [theme.breakpoints.down('lg')]: { padding: 3 },
        }}
      >
        {children}
      </Box>
      <GeneralFooter />
    </Box>
  );
};

export default GeneralLayout;
