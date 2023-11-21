import React, { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import OpeningConsultingContent from '@/app/consulting/opening/content';
import { OFF_WHITE_COLOR } from '@/constants/color';
import type { ModalProps } from '@mui/material';

const ConsultingModal = (props: Omit<ModalProps, 'children'>) => {
  const theme = useTheme();
  const isUpMedium = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [modalWidth, setModalWidth] = useState<string | undefined>(undefined); // undefined 이면 auto

  useEffect(() => {
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
