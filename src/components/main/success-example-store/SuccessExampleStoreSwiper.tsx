'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useQuery } from '@tanstack/react-query';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { getSuccessExample } from '@/api/success-example';
import { SuccessExampleCard } from '@/components/common/success-example-card';
import { SwiperPrevButton, SwiperNextButton } from '@/components/common/swiper';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';

const SuccessExampleStoreSwiper = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [slideWrapperWidth, setSliderWrapperWidth] = useState(1000);
  const [cardWidth, setCardWidth] = useState(800);
  const [cardHeight, setCardHeight] = useState(400);
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    LARGE_LAYOUT_WIDTH,
  );

  const { data: successExamples, isLoading } = useQuery({
    queryKey: ['success_examples'],
    queryFn: () => getSuccessExample(),
  });

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
          {isLoading && (
            <Skeleton
              slot='wrapper-start'
              sx={{ width: '100%', height: '300px' }}
            />
          )}
          {!isLoading &&
            successExamples?.data?.map((successExample, index) => (
              <SwiperSlide
                key={'success-example-' + index}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <SuccessExampleCard
                  successExampleData={successExample}
                  width={cardWidth}
                  height={cardHeight}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <SwiperNextButton swiperRef={swiperRef} />
      </Box>
    </Box>
  );
};

export default SuccessExampleStoreSwiper;
