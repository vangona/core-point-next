'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

interface ImageSectionProps {
  imgSrcArr?: string[];
}
const ImageSection = ({ imgSrcArr }: ImageSectionProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const galleryContainerStyle = { width: '100%', height: '80%' };
  const thumbContainerStyle = { height: '20%', padding: '10px 0' };

  return (
    <Box sx={{ width: '500px', height: '400px' }}>
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
