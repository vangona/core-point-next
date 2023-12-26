'use client';

import React, { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import type { BoxProps } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

export const LARGE_HERO_HEIGHT = '600px';
export const SMALL_HERO_HEIGHT = '250px';

interface MainHeroItemProps extends Omit<BoxProps, 'title'> {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  description?: React.ReactNode;
  imgSrc?: string;
  heroComponent?: React.ReactNode;
  typoComponent?: React.ReactNode;
  disableImg?: boolean;
  containerSx?: SystemStyleObject;
  imageBgSx?: SystemStyleObject;
}
const MainHeroItem = (props: MainHeroItemProps) => {
  const { subTitle, description, imgSrc, title, disableImg, ...rest } = props;
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('sm'));

  const [isIn, setIsIn] = useState(false);

  const handleMouseEnter = () => {
    setIsIn(true);
  };
  const handleMouseOut = (e: React.MouseEvent) => {
    if (
      e.relatedTarget instanceof Node &&
      !e.currentTarget.contains(e.relatedTarget)
    )
      setIsIn(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
      {...rest}
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        ...props.containerSx,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '75%',
          left: '50%',
          top: '50%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'translate(-50%, -50%)',
          zIndex: 9,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 7,
          }}
        >
          <Box
            color='white'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <Typography variant={isDownMedium ? 'h5' : 'h4'}>
                {title}
              </Typography>
              <Typography variant={isDownMedium ? 'h6' : 'h5'}>
                {subTitle}
              </Typography>
            </Box>
            {!isDownMedium && (
              <Collapse in={isIn}>
                <Typography
                  className='main-hero-content main-hero-content-1'
                  variant='subtitle1'
                  component='p'
                  sx={{
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'keep-all',
                    textAlign: 'center',
                  }}
                >
                  {description}
                </Typography>
              </Collapse>
            )}
          </Box>
          <Box>
            <Button
              size={isDownMedium ? 'medium' : 'large'}
              variant='outlined'
              sx={{
                color: 'white',
                borderColor: 'white',
                borderRadius: 0,
                padding: isDownMedium ? '9px 21px' : '11px 27px',
              }}
            >
              상담 신청하기
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          '&:after': {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            content: '""',
            opacity: 0.8,
            background: 'linear-gradient(to right, #000000 30%, #FFFFFF 100%)',
            ...props.imageBgSx,
          },
        }}
      >
        {!disableImg && (
          <Image
            fill
            objectFit='cover'
            objectPosition='50% 50%'
            alt='hero image'
            src={imgSrc ? imgSrc : '/core-icon.png'}
          />
        )}
      </Box>
    </Box>
  );
};

export default MainHeroItem;
