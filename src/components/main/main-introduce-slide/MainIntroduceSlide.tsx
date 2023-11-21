import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const MainIntroduceSlide = () => {
  const theme = useTheme();
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9,
          color: 'primary.contrastText',
          gap: 2,
          padding: isDownLarge ? 3 : undefined,
        }}
      >
        {isDownLarge ? (
          <Typography
            variant={'h5'}
            component='p'
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap={1}
          >
            <Box>
              코어창업이{' '}
              <Box display='inline' color='primary.main' fontWeight='bold'>
                창업의 문
              </Box>
              을 여는{' '}
            </Box>
            <Box>
              <Box display='inline' color='primary.main' fontWeight='bold'>
                열쇠
              </Box>
              가 되어 드리겠습니다.
            </Box>
          </Typography>
        ) : (
          <Typography variant={'h4'} component='p'>
            코어창업이{' '}
            <Box display='inline' color='primary.main' fontWeight='bold'>
              창업의 문
            </Box>
            을 여는{' '}
            <Box display='inline' color='primary.main' fontWeight='bold'>
              열쇠
            </Box>
            가 되어 드리겠습니다.
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          '&:after': {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            content: '""',
            background: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 200,
            height: 200,
          }}
        >
          <Image
            width={200}
            height={200}
            src={'/core-icon.png'}
            alt='hero image'
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainIntroduceSlide;
