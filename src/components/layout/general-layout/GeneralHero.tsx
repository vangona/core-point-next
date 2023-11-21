'use client';

import React, { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { OFF_WHITE_COLOR } from '@/constants/color';
import type { TypographyVariant } from '@mui/material';

export const LARGE_HERO_HEIGHT = '400px';
export const SMALL_HERO_HEIGHT = '250px';

const LARGE_TITLE_SIZE = 'h3';
const MEDIUM_TITLE_SIZE = 'h4';
const SMALL_TITLE_SIZE = 'h5';

interface GeneralHeroProps {
  title?: string;
  description?: string;
  imgSrc?: string;
  heroComponent?: React.ReactNode;
}
const GeneralHero = (props: GeneralHeroProps) => {
  const { heroComponent, description, imgSrc, title } = props;
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('sm'));
  const [heroHeight, setHeroHeight] = useState(LARGE_HERO_HEIGHT);
  const [titleSize, setTitleSize] =
    useState<TypographyVariant>(LARGE_TITLE_SIZE);

  useEffect(() => {
    if (isUpLarge) {
      setHeroHeight(LARGE_HERO_HEIGHT);
      setTitleSize(LARGE_TITLE_SIZE);
      return;
    }

    if (isMedium) {
      setTitleSize(MEDIUM_TITLE_SIZE);
    }

    if (isDownMedium) {
      setHeroHeight(SMALL_HERO_HEIGHT);
      setTitleSize(SMALL_TITLE_SIZE);
      return;
    }
  }, [isUpLarge, isMedium]);

  return (
    <Box sx={{ width: '100%', height: heroHeight, position: 'relative' }}>
      {heroComponent ?? (
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              zIndex: 9,
              gap: 3,
            }}
          >
            <Typography
              variant={titleSize}
              component='h2'
              color={OFF_WHITE_COLOR}
              align='center'
            >
              {title}
            </Typography>
            <Typography variant='body1' color={OFF_WHITE_COLOR}>
              {description}
            </Typography>
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
                background: 'rgba(0, 0, 0, 0.5)',
              },
            }}
          >
            <Image
              fill
              objectFit='cover'
              objectPosition='50% 100%'
              alt='hero image'
              src={
                imgSrc
                  ? imgSrc
                  : 'https://source.unsplash.com/photo-1698180687511-bd6c0104ee98?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'
              }
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default GeneralHero;
