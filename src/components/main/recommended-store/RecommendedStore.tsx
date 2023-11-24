'use client';

import { useState, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import { SectionLayout } from '@/components/main/section-layout';
import SectionSkeleton from '@/components/main/section-skeleton/SectionSkeleton';
const RecommendedStoreSwiper = dynamic(
  () => import('./RecommendedStoreSwiper'),
  {
    ssr: false,
    loading: () => <SectionSkeleton />,
  },
);

const LARGE_SWIPER_WRAPPER_WIDTH = 1100;
const MEDIUM_SWIPER_WRAPPER_WIDTH = 700;
const SMALL_SWIPER_WRAPPER_WIDTH = 400;

const RecommendedStore = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));

  const [slideWrapperWidth, setSliderWrapperWidth] = useState(
    LARGE_SWIPER_WRAPPER_WIDTH,
  );
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    LARGE_LAYOUT_WIDTH,
  );

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
      <SectionTitle label={'코어창업 추천 매물'} />
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
        <RecommendedStoreSwiper />
      </Box>
    </SectionLayout>
  );
};

export default RecommendedStore;
