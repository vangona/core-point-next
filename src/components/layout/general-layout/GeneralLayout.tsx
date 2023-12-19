'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';
import { ConsultingModal } from '@/components/common/consulting-modal';
import FabGroup from '@/components/common/fab-group/FabGroup';
import { OFF_WHITE_COLOR } from '@/constants/color';
import GeneralFooter from './GeneralFooter';
import GeneralHeader from './GeneralHeader';

interface GeneralLayoutInterface {
  children: React.ReactNode;
}
const GeneralLayout = (props: GeneralLayoutInterface) => {
  const { children } = props;
  const pathname = usePathname();
  const isMain = pathname === '/';

  const [isConsultingModalOpen, setIsConsultingModalOpen] = useState(false);
  const onConsultingModalClose = () => {
    setIsConsultingModalOpen(false);
  };

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
      {!isMain && <GeneralHeader />}
      <FabGroup onMessageClick={() => setIsConsultingModalOpen(true)} />
      <ConsultingModal
        open={isConsultingModalOpen}
        onClose={onConsultingModalClose}
      />
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
