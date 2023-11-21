import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { SectionLayout } from '../section-layout';

const BottomSection = () => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionLayout color='white' innerSx={{ gap: 8 }}>
      {isDownMedium ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant='h4' component='h3' fontWeight='bold'>
            창업의 문을 여는 열쇠
          </Typography>
          <Typography
            variant='h4'
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
      <Button variant='contained' size='large' sx={{ fontWeight: 'bold' }}>
        상담 신청하기
      </Button>
    </SectionLayout>
  );
};

export default BottomSection;
