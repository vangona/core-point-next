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

  const _sx: SxProps = {
    zIndex: 9,
    ...sx,
  };

  return (
    <IconButton
      slot='container-start'
      onClick={() => swiper.slidePrev()}
      sx={_sx}
    >
      {customIcon ? customIcon : <ArrowLeft />}
    </IconButton>
  );
};

export default SwiperPrevButton;
