'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

const LARGE_WIDTH = '500px';
const LARGE_HEIGHT = '400px';

const MEDIUM_WIDTH = '300px';
const MEDIUM_HEIGHT = '300px';

interface ImageSectionProps {
  imgSrcArr?: string[];
}
const ImageSection = ({ imgSrcArr }: ImageSectionProps) => {
  const theme = useTheme();
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const [width, setWidth] = useState(LARGE_WIDTH);
  const [height, setHeight] = useState(LARGE_HEIGHT);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const galleryContainerStyle = { width: '100%', height: '80%' };
  const thumbContainerStyle = { height: '20%', padding: '10px 0' };

  useEffect(() => {
    if (isDownLarge) {
      setWidth(MEDIUM_WIDTH);
      setHeight(MEDIUM_HEIGHT);
      return;
    }

    setWidth(LARGE_WIDTH);
    setHeight(LARGE_HEIGHT);
  }, [isDownLarge]);

  return (
    <Box sx={{ width, height }}>
      <Swiper
        style={galleryContainerStyle}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        loop
        navigation
        className='swiper-gallery__image--container'
      >
        {imgSrcArr?.map((imgSrc, index) => (
          <SwiperSlide key={'swiper-gallery__img--' + index}>
            <Card
              variant='elevation'
              raised
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <Image src={imgSrc} alt='가게 이미지' fill />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={thumbContainerStyle}
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        loop
        freeMode
        watchSlidesProgress
        className='swiper-gallery__thumb--container'
      >
        {imgSrcArr?.map((imgSrc, index) => (
          <SwiperSlide key={'swiper-gallery__img--' + index}>
            <Card
              variant='elevation'
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <Image src={imgSrc} alt='가게 이미지' fill />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSection;
