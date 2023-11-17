'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { OFF_WHITE_COLOR } from '@/constants/color';
import { CorePointRoutes } from '@/constants/routes';
import { DEFAULT_HERO_HEIGHT } from './constants';

interface GeneralHeroProps {
  heroComponent?: React.ReactNode;
}
const GeneralHero = (props: GeneralHeroProps) => {
  const { heroComponent } = props;
  const pathname = usePathname();
  const [imgSrc, setImgSrc] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (!pathname) return;

    switch (pathname) {
      case CorePointRoutes.HOME:
        setTitle('OOO 창업');
        setDescription(
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, eum eos? Animi obcaecati neque odio facere autem sapiente fugit, minima, quae ratione rerum omnis ducimus exercitationem facilis, magnam amet similique?',
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
    <Box
      sx={{ width: '100%', height: DEFAULT_HERO_HEIGHT, position: 'relative' }}
    >
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
              variant='h3'
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
