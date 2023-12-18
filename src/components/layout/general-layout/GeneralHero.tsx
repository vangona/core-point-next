'use client';

import React, { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { OFF_WHITE_COLOR } from '@/constants/color';
import type { TypographyVariant } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

export const LARGE_HERO_HEIGHT = '500px';
export const SMALL_HERO_HEIGHT = '250px';

const LARGE_TITLE_SIZE = 'h3';
const MEDIUM_TITLE_SIZE = 'h4';
const SMALL_TITLE_SIZE = 'h5';

interface GeneralHeroProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  imgSrc?: string;
  heroComponent?: React.ReactNode;
  typoComponent?: React.ReactNode;
  disableImg?: boolean;
  imageBgSx?: SystemStyleObject;
}
const GeneralHero = (props: GeneralHeroProps) => {
  const {
    heroComponent,
    typoComponent,
    description,
    imgSrc,
    title,
    disableImg,
  } = props;
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
  }, [isUpLarge, isMedium, isDownMedium]);

  return (
    <Box sx={{ width: '100%', height: heroHeight, position: 'relative' }}>
      {heroComponent ?? (
        <>
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
            {typoComponent ? (
              typoComponent
            ) : (
              <>
                <Typography
                  variant={titleSize}
                  component='h2'
                  color={OFF_WHITE_COLOR}
                  align='center'
                >
                  {title}
                </Typography>
                <Typography
                  variant='body1'
                  color={OFF_WHITE_COLOR}
                  sx={{ wordBreak: 'keep-all' }}
                >
                  {description}
                </Typography>
              </>
            )}
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
        </>
      )}
    </Box>
  );
};

export default GeneralHero;
