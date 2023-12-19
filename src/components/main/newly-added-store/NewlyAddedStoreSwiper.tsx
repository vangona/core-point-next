'use client';

import { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { getNewStore } from '@/api/store';
import ProgressBackdrop from '@/components/common/progress-backdrop/ProgressBackdrop';
import { SwiperPrevButton, SwiperNextButton } from '@/components/common/swiper';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';

const LARGE_SLIDE_PER_VIEW = 4;
const MEDIUM_SLIDE_PER_VIEW = 2;
const SMALL_SLIDE_PER_VIEW = 1;

const NewlyAddedStoreSwiper = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const swiperRef = useRef<SwiperClass>();
  const [slidePerView, setSlidePerView] = useState(LARGE_SLIDE_PER_VIEW);

  const [isBackdrop, setIsBackdrop] = useState(false);

  const onCardClick = () => {
    setIsBackdrop(true);
  };

  const { data: newStores } = useQuery({
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
      {!isDownMedium && <SwiperPrevButton swiperRef={swiperRef} />}
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
        {newStores?.data.map((store, index) => (
          <SwiperSlide
            key={'newly-added-store' + index}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <VerticalStoreCard storeData={store} onCardClick={onCardClick} />
          </SwiperSlide>
        ))}
      </Swiper>
      {!isDownMedium && <SwiperNextButton swiperRef={swiperRef} />}
      <ProgressBackdrop open={isBackdrop} />
    </>
  );
};

export default NewlyAddedStoreSwiper;
