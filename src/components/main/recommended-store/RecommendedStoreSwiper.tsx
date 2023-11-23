import { SwiperPrevButton, SwiperNextButton } from '@/components/common/swiper';
import { Box, Skeleton, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { getRecommendedStore } from '@/api/store/getRecommendedStore';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import { useSuspenseQuery } from '@tanstack/react-query';

const LARGE_SLIDE_PER_VIEW = 4;
const MEDIUM_SLIDE_PER_VIEW = 2;
const SMALL_SLIDE_PER_VIEW = 1;

const RecommendedStoreSwiper = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [slidePerView, setSlidePerView] = useState(LARGE_SLIDE_PER_VIEW);

  const { data: recommendedStores, isLoading } = useSuspenseQuery({
    queryKey: ['store-recommended'],
    queryFn: () => getRecommendedStore(),
  });

  const swiperRef = useRef<SwiperClass>();

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
        slidesPerView={slidePerView}
        modules={[Autoplay, Mousewheel, Navigation, Pagination]}
        autoplay
        mousewheel
        loop
        pagination={{ clickable: true }}
      >
        {isLoading && <Skeleton width='100%' height='100%' />}
        {!isLoading &&
          recommendedStores?.data.map((storeData, index) => (
            <SwiperSlide key={'recommended-store-' + index}>
              <VerticalStoreCard storeData={storeData} />
            </SwiperSlide>
          ))}
      </Swiper>
      <SwiperNextButton swiperRef={swiperRef} />
    </>
  );
};

export default RecommendedStoreSwiper;
