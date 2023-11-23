import Skeleton from '@mui/material/Skeleton';
import { SwiperSlide } from 'swiper/react';
import type { SxProps } from '@mui/material';

interface SlideSkeletonProps {
  numbers?: number;
  sx?: SxProps;
}
const SlideSkeleton = ({ numbers, sx }: SlideSkeletonProps) => {
  return new Array(numbers ?? 2).map((_, index) => (
    <SwiperSlide key={'slide-skeleton-' + index}>
      <Skeleton sx={{ width: '240px', height: '320px', ...sx }} />
    </SwiperSlide>
  ));
};

export default SlideSkeleton;
