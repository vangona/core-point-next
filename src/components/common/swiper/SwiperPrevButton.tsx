import React from 'react';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import IconButton from '@mui/material/IconButton';
import type { SxProps } from '@mui/material';
import type { SwiperRef } from 'swiper/react';

interface SwiperPrevButtonProps {
  swiperRef: React.RefObject<SwiperRef>;
  customIcon?: React.ReactNode;
  sx?: SxProps;
}
const SwiperPrevButton = ({
  swiperRef,
  customIcon,
  sx,
}: SwiperPrevButtonProps) => {
  const _sx: SxProps = {
    zIndex: 9,
    ...sx,
  };

  if (!swiperRef) return;
  return (
    <IconButton
      slot='container-start'
      onClick={() => swiperRef.current?.swiper.slidePrev()}
      sx={_sx}
    >
      {customIcon ? customIcon : <ArrowLeft />}
    </IconButton>
  );
};

export default SwiperPrevButton;
