'use client';

import React, { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { OFF_WHITE_COLOR } from '@/constants/color';
import { CorePointRoutes } from '@/constants/routes';
import type { TypographyVariant } from '@mui/material';

const LARGE_HERO_HEIGHT = '500px';
const MEDIUM_HERO_HEIGHT = '400px';
const SMALL_HERO_HEIGHT = '200px';

const LARGE_TITLE_SIZE = 'h3';
const MEDIUM_TITLE_SIZE = 'h4';
const SMALL_TITLE_SIZE = 'h5';

interface GeneralHeroProps {
  heroComponent?: React.ReactNode;
}
const GeneralHero = (props: GeneralHeroProps) => {
  const { heroComponent } = props;
  const pathname = usePathname();
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [heroHeight, setHeroHeight] = useState(LARGE_HERO_HEIGHT);
  const [imgSrc, setImgSrc] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleSize, setTitleSize] =
    useState<TypographyVariant>(LARGE_TITLE_SIZE);

  useEffect(() => {
    if (isUpLarge) {
      setHeroHeight(LARGE_HERO_HEIGHT);
      setTitleSize(LARGE_TITLE_SIZE);
      return;
    }

    if (isMedium) {
      setHeroHeight(MEDIUM_HERO_HEIGHT);
      setTitleSize(MEDIUM_TITLE_SIZE);
      return;
    }

    setHeroHeight(SMALL_HERO_HEIGHT);
    setTitleSize(SMALL_TITLE_SIZE);
  }, [isUpLarge, isMedium]);

  useEffect(() => {
    if (!pathname) return;

    switch (pathname) {
      case CorePointRoutes.HOME:
        setTitle('코어 창업');
        setDescription(
          '코어창업이 창업의 문을 여는 열쇠가 되어 드리겠습니다. (스타일 수정 예정)',
        );
        setImgSrc('https://source.unsplash.com/random?main');
        break;
      case CorePointRoutes.STORE:
        setTitle('매물 정보');
        setDescription(
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, eum eos? Animi obcaecati neque odio facere autem sapiente fugit, minima, quae ratione rerum omnis ducimus exercitationem facilis, magnam amet similique?',
        );
        setImgSrc('https://source.unsplash.com/random?store');
        break;
      case CorePointRoutes.OPENING_CONSULTING:
        setTitle('창업컨설팅 신청');
        setDescription(
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, eum eos? Animi obcaecati neque odio facere autem sapiente fugit, minima, quae ratione rerum omnis ducimus exercitationem facilis, magnam amet similique?',
        );
        setImgSrc('https://source.unsplash.com/random?contract');
        break;
      case CorePointRoutes.TRANSFER_CONSULTING:
        setTitle('양도컨설팅 신청');
        setDescription(
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, eum eos? Animi obcaecati neque odio facere autem sapiente fugit, minima, quae ratione rerum omnis ducimus exercitationem facilis, magnam amet similique?',
        );
        setImgSrc('https://source.unsplash.com/random?sell');
        break;
      case CorePointRoutes.PARTNERSHIP:
        setTitle('협업 신청');
        setDescription(
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, eum eos? Animi obcaecati neque odio facere autem sapiente fugit, minima, quae ratione rerum omnis ducimus exercitationem facilis, magnam amet similique?',
        );
        setImgSrc('https://source.unsplash.com/random?partnership');
        break;
      default:
        break;
    }
  }, [pathname]);

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
