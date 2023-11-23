import { Skeleton, SxProps } from '@mui/material';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

interface SlideSkeletonProps {
  numbers?: number;
  sx?: SxProps;
}
const SlideSkeleton = ({ numbers, sx }: SlideSkeletonProps) => {
  return new Array(numbers ?? 2).map(() => (
    <SwiperSlide>
      <Skeleton sx={{ width: '240px', height: '320px', ...sx }} />
    </SwiperSlide>
  ));
};

export default SlideSkeleton;
