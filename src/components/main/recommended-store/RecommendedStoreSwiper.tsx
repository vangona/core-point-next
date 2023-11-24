import { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { getRecommendedStore } from '@/api/store/getRecommendedStore';
import ProgressBackdrop from '@/components/common/progress-backdrop/ProgressBackdrop';
import { SwiperPrevButton, SwiperNextButton } from '@/components/common/swiper';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';

const LARGE_SLIDE_PER_VIEW = 4;
const MEDIUM_SLIDE_PER_VIEW = 2;
const SMALL_SLIDE_PER_VIEW = 1;

const RecommendedStoreSwiper = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [slidePerView, setSlidePerView] = useState(LARGE_SLIDE_PER_VIEW);

  const [isBackdrop, setIsBackdrop] = useState(false);

  const onCardClick = () => {
    setIsBackdrop(true);
  };

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
      {!isDownMedium && <SwiperPrevButton swiperRef={swiperRef} />}
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
              <VerticalStoreCard
                storeData={storeData}
                onCardClick={onCardClick}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      {!isDownMedium && <SwiperNextButton swiperRef={swiperRef} />}
      <ProgressBackdrop open={isBackdrop} />
    </>
  );
};

export default RecommendedStoreSwiper;
