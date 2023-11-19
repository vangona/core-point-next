'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from '@/components/common/section-title';
import { SuccessExampleCard } from '@/components/common/success-example-card';
import { dummySuccessExample } from '@/components/common/success-example-card/dummySuccessExample';
import { SwiperNextButton, SwiperPrevButton } from '@/components/common/swiper';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import SectionLayout from '../section-layout/SectionLayout';

const SuccessExampleStore = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [slideWrapperWidth, setSliderWrapperWidth] = useState(1000);
  const [cardWidth, setCardWidth] = useState(800);
  const [cardHeight, setCardHeight] = useState(400);
  const [layoutWidth, setLayoutWidth] = useState(LARGE_LAYOUT_WIDTH);

  useEffect(() => {
    if (isUpLarge) {
      setSliderWrapperWidth(1000);
      setCardWidth(800);
      setCardHeight(400);
      setLayoutWidth(LARGE_LAYOUT_WIDTH);
      return;
    }

    if (isMedium) {
      setSliderWrapperWidth(600);
      setCardWidth(600);
      setCardHeight(300);
      setLayoutWidth(MEDIUM_LAYOUT_WIDTH);
      return;
    }

    setSliderWrapperWidth(400);
    setCardWidth(300);
    setCardHeight(600);
    setLayoutWidth(SMALL_LAYOUT_WIDTH);
  }, [isUpLarge, isMedium]);

  return (
    <SectionLayout color='white'>
      <SectionTitle label='성공 사례' />
      <Box
        sx={{
          width: layoutWidth,
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
          '& .slide-wrapper': {
            width: slideWrapperWidth,
          },
        }}
      >
        <Swiper
          modules={[Navigation, EffectFade]}
          grabCursor
          loop
          effect='fade'
        >
          <SwiperPrevButton />
          <SwiperSlide>
            <SuccessExampleCard
              successExampleData={dummySuccessExample[0]}
              width={cardWidth}
              height={cardHeight}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SuccessExampleCard
              successExampleData={dummySuccessExample[1]}
              width={cardWidth}
              height={cardHeight}
            />
          </SwiperSlide>
          <SwiperNextButton />
        </Swiper>
      </Box>
    </SectionLayout>
  );
};

export default SuccessExampleStore;
