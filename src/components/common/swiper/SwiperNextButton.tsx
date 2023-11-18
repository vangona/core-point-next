import React from 'react';
import ArrowRight from '@mui/icons-material/ArrowRight';
import IconButton from '@mui/material/IconButton';
import { useSwiper } from 'swiper/react';
import type { SxProps } from '@mui/material';

interface SwiperNextButtonProps {
  customIcon?: React.ReactNode;
  sx?: SxProps;
}
const SwiperNextButton = ({ customIcon, sx }: SwiperNextButtonProps) => {
  const swiper = useSwiper();
  const _sx: SxProps = {
    zIndex: 9,
    ...sx,
  };

  return (
    <IconButton
      slot='container-end'
      onClick={() => swiper.slideNext()}
      sx={_sx}
    >
      {customIcon ? customIcon : <ArrowRight />}
    </IconButton>
  );
};

export default SwiperNextButton;
