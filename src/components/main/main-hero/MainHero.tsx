import Box from '@mui/material/Box';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainIntroduceSlide } from '../main-introduce-slide';
import { useMediaQuery, useTheme } from '@mui/material';
import GeneralHero from '@/components/layout/general-layout/GeneralHero';

export const LARGE_HERO_HEIGHT = '400px';
export const SMALL_HERO_HEIGHT = '250px';

const MainHero = () => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [heroHeight, setHeroHeight] = useState(LARGE_HERO_HEIGHT);

  useEffect(() => {
    setHeroHeight(isDownMedium ? SMALL_HERO_HEIGHT : LARGE_HERO_HEIGHT);
  });

  return (
    <Box
      sx={{
        '& .swiper': {
          width: '100%',
          height: heroHeight,
        },
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Autoplay]}
        loop
        grabCursor
        autoplay
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <MainIntroduceSlide />
        </SwiperSlide>
        <SwiperSlide>
          <GeneralHero
            title='베스킨라빈스 창업 컨설팅'
            description='시원한 아이스크림'
          />
        </SwiperSlide>
        <SwiperSlide>
          <GeneralHero title='BBQ 창업 컨설팅' description='맛있는 치킨' />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default MainHero;
