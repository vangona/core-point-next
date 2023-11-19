'use client';

import { useState, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';

export default function Transfer() {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [layoutWidth, setLayoutWidth] = useState(LARGE_LAYOUT_WIDTH);

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
        width: layoutWidth,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 5,
          alignItems: 'flex-start',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
        }}
      >
        <TextField label='성함' variant='outlined' />
        <TextField label='연락처' variant='outlined' />
        <TextField label='사업체 위치' variant='outlined' />
        <TextField label='사업체 크기' variant='outlined' />
        <TextField label='상호' variant='outlined' />
        <TextField label='업종' variant='outlined' />
        <TextField label='문의사항' variant='outlined' multiline fullWidth />
        <Box>신청 후 담당자 배정하여 연락 드릴 예정입니다.</Box>
        <Button size='large' variant='contained'>
          컨설팅 신청하기
        </Button>
      </Box>
    </Box>
  );
}
