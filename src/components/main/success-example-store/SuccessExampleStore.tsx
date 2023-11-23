'use client';

import { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
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
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    LARGE_LAYOUT_WIDTH,
  );

  const swiperRef = useRef<SwiperClass>();

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
    setCardHeight(300);
    setLayoutWidth(SMALL_LAYOUT_WIDTH);
  }, [isUpLarge, isMedium]);

  return (
    <SectionLayout color='white'>
      <SectionTitle label='창업 성공 사례' />
      <ParagraphDivider />
      <Box
        sx={{
          width: layoutWidth,
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
          '& .swiper-wrapper': {
            width: slideWrapperWidth,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SwiperPrevButton swiperRef={swiperRef} />
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className='main-swiper'
            modules={[Navigation, EffectFade, Pagination]}
            grabCursor
            loop
            pagination={{ clickable: true }}
            effect='fade'
          >
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
          </Swiper>
          <SwiperNextButton swiperRef={swiperRef} />
        </Box>
      </Box>
    </SectionLayout>
  );
};

export default SuccessExampleStore;
