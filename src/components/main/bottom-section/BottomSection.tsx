'use client';

import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ConsultingModal } from '@/components/common/consulting-modal';
import { SectionLayout } from '@/components/main/section-layout';

const BottomSection = () => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SectionLayout color='white' sx={{ gap: 8 }}>
        {isDownMedium ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant='h5' component='h3' fontWeight='bold'>
              창업의 문을 여는 열쇠
            </Typography>
            <Typography
              variant='h5'
              component='h3'
              fontWeight='bold'
              color='primary.main'
            >
              코어창업
            </Typography>
          </Box>
        ) : (
          <Typography variant='h4' component='h3' fontWeight='bold'>
            {'창업의 문을 여는 열쇠, '}
            <Box display='inline' color='primary.main'>
              코어창업
            </Box>
          </Typography>
        )}
        <Button
          variant='contained'
          size='large'
          sx={{ fontWeight: 'bold' }}
          onClick={() => setIsModalOpen(true)}
        >
          상담 신청하기
        </Button>
      </SectionLayout>
      <ConsultingModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default BottomSection;
