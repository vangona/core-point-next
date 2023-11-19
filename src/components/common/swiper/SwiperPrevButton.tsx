import React from 'react';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import IconButton from '@mui/material/IconButton';
import { useSwiper } from 'swiper/react';
import type { SxProps } from '@mui/material';

interface SwiperPrevButtonProps {
  customIcon?: React.ReactNode;
  sx?: SxProps;
}
const SwiperPrevButton = ({ customIcon, sx }: SwiperPrevButtonProps) => {
  const swiper = useSwiper();

  return (
    <IconButton
      slot='container-start'
      onClick={() => swiper.slidePrev()}
      sx={sx}
      size='large'
    >
      {customIcon ? customIcon : <ArrowLeft />}
    </IconButton>
  );
};

export default SwiperPrevButton;
