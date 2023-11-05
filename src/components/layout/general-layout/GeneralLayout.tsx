import React from 'react';
import { Box } from '@mui/material';
import { DEFAULT_LAYOUT_WIDTH, OFF_WHITE_COLOR } from './constants';
import GeneralFooter from './GeneralFooter';
import GeneralHeader from './GeneralHeader';
import GeneralHero from './GeneralHero';

interface GeneralLayoutInterface {
  children: React.ReactNode;
}
const GeneralLayout = (props: GeneralLayoutInterface) => {
  const { children } = props;
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: OFF_WHITE_COLOR,
      }}
    >
      <GeneralHeader />
      <GeneralHero />
      <Box sx={{ flexGrow: 1, width: DEFAULT_LAYOUT_WIDTH }}>{children}</Box>
      <GeneralFooter />
    </Box>
  );
};

export default GeneralLayout;
