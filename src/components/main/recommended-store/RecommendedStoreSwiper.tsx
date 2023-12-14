import { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useSuspenseQuery } from '@tanstack/react-query';
import {
  Autoplay,
  EffectFlip,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { getRecommendedStore } from '@/api/store/getRecommendedStore';
import ProgressBackdrop from '@/components/common/progress-backdrop/ProgressBackdrop';
import { SwiperPrevButton, SwiperNextButton } from '@/components/common/swiper';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';

const LARGE_SWIPER_WRAPPER_WIDTH = 500;
const SMALL_SWIPER_WRAPPER_WIDTH = 350;

const RecommendedStoreSwiper = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [slideWrapperWidth, setSliderWrapperWidth] = useState(
    LARGE_SWIPER_WRAPPER_WIDTH,
  );
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    LARGE_LAYOUT_WIDTH,
  );

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
      setSliderWrapperWidth(LARGE_SWIPER_WRAPPER_WIDTH);
      setLayoutWidth(LARGE_LAYOUT_WIDTH);
      return;
    }

    if (isMedium) {
      setLayoutWidth(MEDIUM_LAYOUT_WIDTH);
      return;
    }

    setSliderWrapperWidth(SMALL_SWIPER_WRAPPER_WIDTH);
    setLayoutWidth(SMALL_LAYOUT_WIDTH);
  }, [isUpLarge, isMedium]);

  return (
    <Box
      sx={{
        width: layoutWidth,
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>data box</Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          '& .swiper-wrapper': {
            width: slideWrapperWidth,
          },
        }}
      >
        {!isDownMedium && <SwiperPrevButton swiperRef={swiperRef} />}
        <Swiper
          className='main-swiper'
          effect={'flip'}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          grabCursor
          centeredSlides
          modules={[Autoplay, Mousewheel, Navigation, Pagination, EffectFlip]}
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
      </Box>
    </Box>
  );
};

export default RecommendedStoreSwiper;
