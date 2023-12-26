'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import dynamic from 'next/dynamic';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DEFAULT_HEADER_HEIGHT } from '@/components/layout/general-layout/constants';
import GeneralHeader from '@/components/layout/general-layout/GeneralHeader';
import { OFF_WHITE_COLOR } from '@/constants/color';
import MainHeroItem from './MainHeroItem';

const MainIntroduceSlide = dynamic(
  () => import('../main-introduce-slide/MainIntroduceSlide'),
  {
    ssr: false,
    loading: () => (
      <MainHeroItem
        disableImg
        title={<Skeleton width='200px' />}
        description={<Skeleton width='300px' />}
      />
    ),
  },
);

export const LARGE_HERO_HEIGHT = '600px';
export const SMALL_HERO_HEIGHT = '250px';

const MainHero = () => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [heroHeight, setHeroHeight] = useState(LARGE_HERO_HEIGHT);

  useEffect(() => {
    setHeroHeight(isDownMedium ? SMALL_HERO_HEIGHT : LARGE_HERO_HEIGHT);
  }, [isDownMedium]);

  return (
    <Box
      sx={{
        '& .swiper': {
          width: '100%',
          height: `calc(${heroHeight} + ${DEFAULT_HEADER_HEIGHT})`,
        },
      }}
    >
      <GeneralHeader
        sx={{
          position: 'absolute',
          color: OFF_WHITE_COLOR,
          '& a': { color: OFF_WHITE_COLOR },
          '& hr': { borderColor: OFF_WHITE_COLOR },
        }}
      />
      <Swiper
        modules={[Pagination]}
        loop
        grabCursor
        // autoplay={{ delay: 5000 }}
        pagination={{
          clickable: true,
          type: 'bullets',
          dynamicBullets: true,
        }}
      >
        <SwiperSlide>
          <MainIntroduceSlide />
        </SwiperSlide>
        <SwiperSlide>
          <MainHeroItem
            title={'카페 창업'}
            subTitle={
              '복잡하고 어려운 카페 창업, 더 이상은 힘들게 고민하지 마세요.'
            }
            description={`코어 창업은 모든 단계에서 여러분의 비전을 현실로 만들기 위해 전문성 있는 컨설턴트들과 협력하며, 
            매출 향상과 운영 최적화를 비롯한 다양한 영역에서 도움을 드립니다. 
            코어 창업이 여러분의 성공적인 카페 창업을 실현해 드립니다`}
            imgSrc='/hero-test-1.jpeg'
            imageBgSx={{
              opacity: 0.8,
              background:
                'linear-gradient(to right, #000000 30%, #FFFFFF 100%)',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainHeroItem
            title={'소자본 창업'}
            subTitle={'작은 투자로도 큰 성과를 이룰 수 있는 소자본창업'}
            description={`새로운 시작을 향해 꿈을 현실로 만드는 여정에서
            당신의 성공을 위한 파트너가 되어드립니다.
            여러분의 꿈을 현실로 만들어 나가는 데 코어 창업이 함께하겠습니다.`}
            imgSrc='/hero-test-3.jpeg'
            imageBgSx={{
              opacity: 0.8,
              background:
                'linear-gradient(to right, #000000 30%, #FFFFFF 100%)',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default MainHero;
