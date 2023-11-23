'use client';

import { useEffect, useState } from 'react';
import { Skeleton, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import SectionLayout from '../section-layout/SectionLayout';
import dynamic from 'next/dynamic';
import SectionSkeleton from '../section-skeleton/SectionSkeleton';

const NewlyAddedStoreSwiper = dynamic(() => import('./NewlyAddedStoreSwiper'), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});

const LARGE_SWIPER_WRAPPER_WIDTH = 1000;
const MEDIUM_SWIPER_WRAPPER_WIDTH = 600;
const SMALL_SWIPER_WRAPPER_WIDTH = 400;

const NewlyAddedStore = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [slideWrapperWidth, setSliderWrapperWidth] = useState(
    LARGE_SWIPER_WRAPPER_WIDTH,
  );
  const [layoutWidth, setLayoutWidth] = useState(LARGE_LAYOUT_WIDTH);

  useEffect(() => {
    if (isUpLarge) {
      setSliderWrapperWidth(LARGE_SWIPER_WRAPPER_WIDTH);
      setLayoutWidth(LARGE_LAYOUT_WIDTH);
      return;
    }

    if (isMedium) {
      setSliderWrapperWidth(MEDIUM_SWIPER_WRAPPER_WIDTH);
      setLayoutWidth(MEDIUM_LAYOUT_WIDTH);
      return;
    }

    setSliderWrapperWidth(SMALL_SWIPER_WRAPPER_WIDTH);
    setLayoutWidth(SMALL_LAYOUT_WIDTH);
  }, [isUpLarge, isMedium]);

  return (
    <SectionLayout>
      <SectionTitle label='신규 등록 매물' />
      <ParagraphDivider />
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
        <NewlyAddedStoreSwiper />
      </Box>
    </SectionLayout>
  );
};

export default NewlyAddedStore;
