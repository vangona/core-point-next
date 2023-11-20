import React from 'react';
import ArrowRight from '@mui/icons-material/ArrowRight';
import IconButton from '@mui/material/IconButton';
import { SwiperClass } from 'swiper/react';
import type { SxProps } from '@mui/material';

interface SwiperNextButtonProps {
  customIcon?: React.ReactNode;
  sx?: SxProps;
  swiperRef?: React.MutableRefObject<SwiperClass | undefined>;
}
const SwiperNextButton = ({
  customIcon,
  sx,
  swiperRef,
}: SwiperNextButtonProps) => {
  return (
    <IconButton
      onClick={() => swiperRef?.current?.slideNext()}
      slot='container-end'
      sx={sx}
      size='large'
    >
      {customIcon ? customIcon : <ArrowRight />}
    </IconButton>
  );
};

export default React.forwardRef(SwiperNextButton);
