import { useRef, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useQuery } from '@tanstack/react-query';
import { Autoplay, EffectCards, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { getRecommendedStore } from '@/api/store/getRecommendedStore';
import ProgressBackdrop from '@/components/common/progress-backdrop/ProgressBackdrop';
import { SwiperPrevButton, SwiperNextButton } from '@/components/common/swiper';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import { OverviewSection } from '@/components/store-detail/overview';

const SWIPER_WRAPPER_WIDTH = '300px';

const RecommendedStoreSwiper = () => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [currentStoreIndex, setCurrentStoreIndex] = useState(0);
  const progressLineRef = useRef<SVGSVGElement>(null);

  const [isBackdrop, setIsBackdrop] = useState(false);

  const onCardClick = () => {
    setIsBackdrop(true);
  };

  const { data: recommendedStores, isLoading } = useQuery({
    queryKey: ['store-recommended'],
    queryFn: () => getRecommendedStore(),
  });

  const swiperRef = useRef<SwiperClass>();

  const handleAutoplayTimeLeft = (
    s: SwiperClass,
    timeLeft: number,
    percentage: number,
  ) => {
    progressLineRef.current?.style.setProperty(
      '--progress',
      percentage.toString(),
    );
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: isDownMedium ? 'column-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        px: 1,
      }}
    >
      <Box sx={{ flexShrink: 0, width: isDownMedium ? '90%' : '40%' }}>
        <OverviewSection
          title={
            isLoading ? (
              <Skeleton width='100%' />
            ) : (
              recommendedStores?.data[currentStoreIndex]?.store_name
            )
          }
          storeDetailData={recommendedStores?.data[currentStoreIndex]}
        />
      </Box>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: isDownMedium ? '100%' : '50%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            '& .swiper': {
              width: SWIPER_WRAPPER_WIDTH,
              display: 'flex',
              justifyContent: 'center',
            },
            '& .swiper-wrapper': {
              maxWidth: isDownMedium ? '240px' : '300px',
            },
          }}
        >
          {!isDownMedium && <SwiperPrevButton swiperRef={swiperRef} />}
          <Swiper
            className='main-swiper'
            effect={'cards'}
            onSlideChange={(swiper) => setCurrentStoreIndex(swiper.activeIndex)}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            cardsEffect={{
              slideShadows: false,
            }}
            onAutoplayTimeLeft={handleAutoplayTimeLeft}
            slidesPerView={1}
            grabCursor
            centeredSlides
            modules={[Autoplay, Mousewheel, Navigation, EffectCards]}
            autoplay={{ pauseOnMouseEnter: true }}
            mousewheel
            rewind
          >
            {isLoading && (
              <Skeleton slot='wrapper-start' width='100%' height='300px' />
            )}
            {!isLoading &&
              recommendedStores?.data.map((storeData, index) => (
                <SwiperSlide key={'recommended-store-' + index}>
                  <VerticalStoreCard
                    storeData={storeData}
                    onCardClick={onCardClick}
                    size={isDownMedium ? 'sm' : 'md'}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          {!isDownMedium && <SwiperNextButton swiperRef={swiperRef} />}
          <ProgressBackdrop open={isBackdrop} />
        </Box>
        <Box>
          <Box className='autoplay-progress'>
            <svg
              className='progress-bar'
              width='100%'
              xmlns='http://www.w3.org/2000/svg'
              ref={progressLineRef}
            >
              <line x1='0' y1='5' x2='200' y2='5' strokeWidth='5' />
            </svg>
            <svg
              className='progress-track'
              width='100%'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line x1='0' y1='5' x2='200' y2='5' strokeWidth='5' />
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecommendedStoreSwiper;
