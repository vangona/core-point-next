import React from 'react';
import Box from '@mui/material/Box';
import FabGroup from '@/components/common/fab-group/FabGroup';
import { OFF_WHITE_COLOR } from '@/constants/color';
import GeneralFooter from './GeneralFooter';
import GeneralHeader from './GeneralHeader';

interface GeneralLayoutInterface {
  children: React.ReactNode;
}
const GeneralLayout = (props: GeneralLayoutInterface) => {
  const { children } = props;

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
      <FabGroup />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
      <GeneralFooter />
    </Box>
  );
};

export default GeneralLayout;
