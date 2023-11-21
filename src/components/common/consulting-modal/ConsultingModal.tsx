import OpeningConsultingContent from '@/app/consulting/opening/content';
import { OFF_WHITE_COLOR } from '@/constants/color';
import { Box, Modal, ModalProps, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ConsultingModal = (props: Omit<ModalProps, 'children'>) => {
  const theme = useTheme();
  const isUpMedium = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [modalWidth, setModalWidth] = useState<string | undefined>(undefined); // undefined 이면 auto

  useEffect(() => {
    console.log(isUpMedium, isMedium, isDownMedium);
    if (isUpMedium) {
      setModalWidth(undefined);
      return;
    }

    if (isMedium) {
      setModalWidth('500px');
      return;
    }

    if (isDownMedium) {
      setModalWidth('80%');
      return;
    }
  }, [isUpMedium, isMedium, isDownMedium]);

  return (
    <Modal {...props}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: modalWidth,
          maxHeight: '75vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 3,
          overflow: 'auto',
          backgroundColor: OFF_WHITE_COLOR,
        }}
      >
        <Image
          width={75}
          height={75}
          src='/core-icon.png'
          alt='열쇠 모양의 코어창업 로고'
        />
        <OpeningConsultingContent />
      </Box>
    </Modal>
  );
};

export default ConsultingModal;
