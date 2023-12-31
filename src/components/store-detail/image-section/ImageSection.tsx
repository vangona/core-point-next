'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { AltImage } from '@/components/common/alt-image';

const LARGE_WIDTH = '700px';
const LARGE_HEIGHT = '600px';

const MEDIUM_WIDTH = '350px';
const MEDIUM_HEIGHT = '350px';

const SMALL_WIDTH = '250px';
const SMALL_HEIGHT = '250px';

interface ImageSectionProps {
  imgSrcArr?: string[] | undefined[];
}
const ImageSection = ({ imgSrcArr }: ImageSectionProps) => {
  const theme = useTheme();
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [width, setWidth] = useState(LARGE_WIDTH);
  const [height, setHeight] = useState(LARGE_HEIGHT);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const galleryContainerStyle = { width: '100%', height: '80%' };
  const thumbContainerStyle = { height: '20%', padding: '10px 0' };

  useEffect(() => {
    if (isDownMedium) {
      setWidth(SMALL_WIDTH);
      setHeight(SMALL_HEIGHT);
      return;
    }

    if (isDownLarge) {
      setWidth(MEDIUM_WIDTH);
      setHeight(MEDIUM_HEIGHT);
      return;
    }

    setWidth(LARGE_WIDTH);
    setHeight(LARGE_HEIGHT);
  }, [isDownLarge, isDownMedium]);

  return (
    <Box
      sx={{
        flexShrink: 0,
        width,
        height,
      }}
    >
      <Swiper
        style={galleryContainerStyle}
        modules={[FreeMode, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        loop
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
              <AltImage objectFit='cover' src={imgSrc} alt='가게 이미지' fill />
            </Card>
          </SwiperSlide>
        ))}
        {imgSrcArr?.length === 0 && (
          <SwiperSlide key={'swiper-gallery__img'}>
            <Card
              variant='elevation'
              raised
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <AltImage
                objectFit='cover'
                src={undefined}
                alt='이미지 없음'
                fill
              />
            </Card>
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        style={thumbContainerStyle}
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Thumbs]}
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
              <AltImage
                disableLabel
                objectFit='cover'
                src={imgSrc}
                alt='가게 이미지'
                fill
              />
            </Card>
          </SwiperSlide>
        ))}
        {imgSrcArr?.length === 0 && (
          <SwiperSlide key={'swiper-gallery__img'}>
            <Card
              variant='elevation'
              raised
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <AltImage
                disableLabel
                objectFit='cover'
                src={undefined}
                alt='이미지 없음'
                fill
              />
            </Card>
          </SwiperSlide>
        )}
      </Swiper>
    </Box>
  );
};

export default ImageSection;
