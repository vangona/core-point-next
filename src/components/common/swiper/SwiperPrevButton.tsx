import React from 'react';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import IconButton from '@mui/material/IconButton';
import { SwiperClass } from 'swiper/react';
import type { SxProps } from '@mui/material';

interface SwiperPrevButtonProps {
  customIcon?: React.ReactNode;
  sx?: SxProps;
  swiperRef?: React.MutableRefObject<SwiperClass | undefined>;
}
const SwiperPrevButton = ({
  customIcon,
  sx,
  swiperRef,
}: SwiperPrevButtonProps) => {
  return (
    <IconButton
      onClick={() => swiperRef?.current?.slidePrev()}
      slot='container-start'
      sx={sx}
      size='large'
    >
      {customIcon ? customIcon : <ArrowLeft />}
    </IconButton>
  );
};

export default React.forwardRef(SwiperPrevButton);
