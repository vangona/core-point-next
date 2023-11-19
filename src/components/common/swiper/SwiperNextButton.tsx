import React from 'react';
import ArrowRight from '@mui/icons-material/ArrowRight';
import IconButton from '@mui/material/IconButton';
import type { SxProps } from '@mui/material';
import type { SwiperRef } from 'swiper/react';

interface SwiperNextButtonProps {
  swiperRef: React.RefObject<SwiperRef>;
  customIcon?: React.ReactNode;
  sx?: SxProps;
}
const SwiperNextButton = ({
  swiperRef,
  customIcon,
  sx,
}: SwiperNextButtonProps) => {
  const _sx: SxProps = {
    zIndex: 9,
    ...sx,
  };

  return (
    <IconButton
      slot='container-end'
      onClick={() => swiperRef.current?.swiper.slideNext()}
      sx={_sx}
    >
      {customIcon ? customIcon : <ArrowRight />}
    </IconButton>
  );
};

export default SwiperNextButton;
