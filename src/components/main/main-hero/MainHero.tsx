'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
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
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));
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
        modules={[Autoplay, Pagination]}
        loop
        grabCursor
        autoplay={{ delay: 5000 }}
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
            typoComponent={
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 7,
                }}
              >
                <Box
                  color='white'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Typography variant='h5'>아이스크림</Typography>
                    <Typography variant='h3'>베스킨라빈스 창업</Typography>
                  </Box>
                  <Box sx={{ maxWidth: isDownLarge ? '100%' : '60%' }}>
                    <Typography variant='h6' component='p'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus, rem praesentium sint, deserunt porro
                      molestias ab a tenetur sunt blanditiis cum cumque odit
                      repudiandae amet. Amet quia esse blanditiis quidem.
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    size='large'
                    variant='outlined'
                    sx={{
                      color: 'white',
                      borderColor: 'white',
                      borderRadius: 0,
                      padding: '11px 27px',
                    }}
                  >
                    상담 신청하기
                  </Button>
                </Box>
              </Box>
            }
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
            typoComponent={
              <Box
                sx={{
                  maxWidth: isDownLarge ? '100%' : '60%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 7,
                }}
              >
                <Box
                  color='white'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Typography variant='h5'>치킨</Typography>
                    <Typography variant='h3'>BBQ 창업</Typography>
                  </Box>
                  <Box
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                  >
                    <Box>
                      <Typography
                        variant='h6'
                        component='p'
                        sx={{ wordBreak: 'keep-all' }}
                      >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Necessitatibus eos sit omnis eligendi hic non
                        molestiae cum et maiores nesciunt ad eius tenetur,
                        impedit reiciendis sequi. Provident dolorum nobis
                        laborum?
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Typography variant='subtitle1' component='p'>
                        #tag1 #tag2 #tag3
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Button
                    size='large'
                    variant='outlined'
                    sx={{
                      color: 'white',
                      borderColor: 'white',
                      borderRadius: 0,
                      padding: '11px 27px',
                    }}
                  >
                    상담 신청하기
                  </Button>
                </Box>
              </Box>
            }
            imgSrc='/hero-test-2.jpeg'
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
