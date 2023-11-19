'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Store } from '@/api/store';
import { SectionTitle } from '@/components/common/section-title';
import { SwiperNextButton, SwiperPrevButton } from '@/components/common/swiper';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import SectionLayout from '../section-layout/SectionLayout';

const LARGE_SLIDE_PER_VIEW = 5;
const MEDIUM_SLIDE_PER_VIEW = 3;
const SMALL_SLIDE_PER_VIEW = 1;
const LARGE_SWIPER_WRAPPER_WIDTH = 1000;
const MEDIUM_SWIPER_WRAPPER_WIDTH = 600;
const SMALL_SWIPER_WRAPPER_WIDTH = 400;

interface NewlyAddedStoreProps {
  storeDataArr: Store[];
  isLoading: boolean;
}
const NewlyAddedStore = ({ storeDataArr, isLoading }: NewlyAddedStoreProps) => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [slidePerView, setSlidePerView] = useState(LARGE_SLIDE_PER_VIEW);
  const [slideWrapperWidth, setSliderWrapperWidth] = useState(
    LARGE_SWIPER_WRAPPER_WIDTH,
  );
  const [layoutWidth, setLayoutWidth] = useState(LARGE_LAYOUT_WIDTH);

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
      <SectionTitle label='신규 매물' />
      <Box
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
          <Swiper
            modules={[Mousewheel]}
            slidesPerView={slidePerView}
            grabCursor
            loop
            mousewheel
          >
            {storeDataArr.map((store, index) => (
              <SwiperSlide key={'newly-added-store' + index}>
                <VerticalStoreCard
                  storeData={store}
                  size={isDownMedium ? 'md' : 'sm'}
                />
              </SwiperSlide>
            ))}
            <SwiperPrevButton />
            <SwiperNextButton />
          </Swiper>
        )}
      </Box>
    </SectionLayout>
  );
};

export default NewlyAddedStore;
