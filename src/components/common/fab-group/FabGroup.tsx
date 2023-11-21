'use client';

import MessageRounded from '@mui/icons-material/MessageRounded';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Image from 'next/image';
import React from 'react';

interface FabGroupProps {
  onMessageClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const FabGroup = ({ onMessageClick }: FabGroupProps) => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const buttonSize = isDownMedium ? 'small' : 'medium';

  return (
    <Box
      sx={{
        position: 'fixed',
        right: 30,
        bottom: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        zIndex: theme.zIndex.fab,
      }}
    >
      <Fab
        size={buttonSize}
        color='primary'
        onClick={(e) =>
          onMessageClick
            ? onMessageClick(e)
            : alert('창업 컨설팅 신청하기 연결')
        }
      >
        <MessageRounded />
      </Fab>
      <Fab
        size={buttonSize}
        sx={{ backgroundColor: '#06BE34' }}
        href='https://blog.naver.com/corepoint_'
        target='_blank'
      >
        <Image
          src={'/naver-ci.png'}
          width={30}
          height={30}
          alt='네이버 블로그'
        />
      </Fab>
      <Fab
        size={buttonSize}
        sx={{ backgroundColor: '#fae100' }}
        href='https://open.kakao.com/o/stsH1PSf'
        target='_blank'
      >
        <Image
          src={'/kakao-openchat.png'}
          width={30}
          height={30}
          alt='카카오톡 오픈채팅'
        />
      </Fab>
    </Box>
  );
};

export default FabGroup;
