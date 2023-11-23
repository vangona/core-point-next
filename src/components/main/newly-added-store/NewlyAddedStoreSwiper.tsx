'use client';

import { getNewStore } from '@/api/store';
import { SwiperPrevButton, SwiperNextButton } from '@/components/common/swiper';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import { useMediaQuery, useTheme } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

const LARGE_SLIDE_PER_VIEW = 5;
const MEDIUM_SLIDE_PER_VIEW = 3;
const SMALL_SLIDE_PER_VIEW = 1;

const NewlyAddedStoreSwiper = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const swiperRef = useRef<SwiperClass>();
  const [slidePerView, setSlidePerView] = useState(LARGE_SLIDE_PER_VIEW);

  const { data: newStores } = useSuspenseQuery({
    queryKey: ['store-new'],
    queryFn: () => getNewStore(),
  });

  useEffect(() => {
    if (isUpLarge) {
      setSlidePerView(LARGE_SLIDE_PER_VIEW);
      return;
    }

    if (isMedium) {
      setSlidePerView(MEDIUM_SLIDE_PER_VIEW);
      return;
    }

    setSlidePerView(SMALL_SLIDE_PER_VIEW);
  }, [isUpLarge, isMedium]);

  return (
    <>
      <SwiperPrevButton swiperRef={swiperRef} />
      <Swiper
        className='main-swiper'
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Mousewheel, Pagination]}
        slidesPerView={slidePerView}
        grabCursor
        loop
        mousewheel
        pagination={{ clickable: true }}
      >
        {newStores.data.map((store, index) => (
          <SwiperSlide key={'newly-added-store' + index}>
            <VerticalStoreCard
              storeData={store}
              size={isDownMedium ? 'md' : 'sm'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperNextButton swiperRef={swiperRef} />
    </>
  );
};

export default NewlyAddedStoreSwiper;
