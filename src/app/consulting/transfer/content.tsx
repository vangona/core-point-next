'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MEDIUM_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import { Divider, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import TransferForm from '@/components/consulting/transfer/TransferForm';

const TransferConsultingContent = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    MEDIUM_LAYOUT_WIDTH,
  );

  useEffect(() => {
    if (isUpLarge) {
      setLayoutWidth(MEDIUM_LAYOUT_WIDTH);
      return;
    }

    setLayoutWidth('100%');
  }, [isUpLarge, isDownLarge]);

  return (
    <Box
      sx={{
        width: layoutWidth,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        padding: 3,
        mt: 2,
      }}
    >
      <Typography variant='h5' component='h3' whiteSpace='nowrap'>
        양도 컨설팅 신청하기
      </Typography>
      <Divider />
      <TransferForm isDownLarge={isDownLarge} />
    </Box>
  );
};

export default TransferConsultingContent;