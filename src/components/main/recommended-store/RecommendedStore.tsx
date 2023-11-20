'use client';

import { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Store } from '@/api/store';
import { SectionTitle } from '@/components/common/section-title';
import SwiperNextButton from '@/components/common/swiper/SwiperNextButton';
import SwiperPrevButton from '@/components/common/swiper/SwiperPrevButton';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import SectionLayout from '../section-layout/SectionLayout';

const LARGE_SLIDE_PER_VIEW = 4;
const MEDIUM_SLIDE_PER_VIEW = 2;
const SMALL_SLIDE_PER_VIEW = 1;
const LARGE_SWIPER_WRAPPER_WIDTH = 1100;
const MEDIUM_SWIPER_WRAPPER_WIDTH = 700;
const SMALL_SWIPER_WRAPPER_WIDTH = 400;

interface RecommendedStoreProps {
  storeDataArr: Store[];
  isLoading: boolean;
  ref?: (node?: Element | null) => void;
}
const RecommendedStore = (props: RecommendedStoreProps) => {
  const { storeDataArr, isLoading, ref } = props;

  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [slidePerView, setSlidePerView] = useState(LARGE_SLIDE_PER_VIEW);
  const [slideWrapperWidth, setSliderWrapperWidth] = useState(
    LARGE_SWIPER_WRAPPER_WIDTH,
  );
  const [layoutWidth, setLayoutWidth] = useState(LARGE_LAYOUT_WIDTH);

  const swiperRef = useRef<SwiperClass>();

  useEffect(() => {
    if (isUpLarge) {
      setSlidePerView(LARGE_SLIDE_PER_VIEW);
      setSliderWrapperWidth(LARGE_SWIPER_WRAPPER_WIDTH);
      setLayoutWidth(LARGE_LAYOUT_WIDTH);
      return;
    }

    if (isMedium) {
      setSlidePerView(MEDIUM_SLIDE_PER_VIEW);
      setSliderWrapperWidth(MEDIUM_SWIPER_WRAPPER_WIDTH);
      setLayoutWidth(MEDIUM_LAYOUT_WIDTH);
      return;
    }

    setSlidePerView(SMALL_SLIDE_PER_VIEW);
    setSliderWrapperWidth(SMALL_SWIPER_WRAPPER_WIDTH);
    setLayoutWidth(SMALL_LAYOUT_WIDTH);
  }, [isUpLarge, isMedium]);

  return (
    <SectionLayout>
      <SectionTitle label='추천 매물' />
      <Box
        ref={ref}
        sx={{
          width: layoutWidth,
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          '& .swiper-wrapper': {
            width: slideWrapperWidth,
          },
        }}
      >
        {isLoading && <Skeleton />}
        {!isLoading && (
          <Box>
            <SwiperPrevButton swiperRef={swiperRef} />
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={slidePerView}
              modules={[Autoplay, Mousewheel, Navigation]}
              autoplay
              mousewheel
              loop
            >
              {storeDataArr.map((storeData, index) => (
                <SwiperSlide key={'recommended-store-' + index}>
                  <VerticalStoreCard storeData={storeData} />
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperNextButton swiperRef={swiperRef} />
          </Box>
        )}
      </Box>
    </SectionLayout>
  );
};

export default RecommendedStore;
