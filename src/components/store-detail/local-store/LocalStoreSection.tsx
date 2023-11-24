import { useEffect, useRef, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Store, useGetStore } from '@/api/store';
import { SwiperNextButton, SwiperPrevButton } from '@/components/common/swiper';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';

const LARGE_SWIPER_WRAPPER_WIDTH = 1100;
const MEDIUM_SWIPER_WRAPPER_WIDTH = 700;
const SMALL_SWIPER_WRAPPER_WIDTH = 400;

interface LocalStoreSectionProps {
  storeDetailData?: Store;
}
const LocalStoreSection = ({ storeDetailData }: LocalStoreSectionProps) => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));

  const [slidePerView, setSlidePerView] = useState(4);
  const [slideWrapperWidth, setSliderWrapperWidth] = useState(
    LARGE_SWIPER_WRAPPER_WIDTH,
  );
  const swiperRef = useRef<SwiperClass>();

  const { data, isLoading } = useGetStore({
    location: storeDetailData?.store_location,
  });

  useEffect(() => {
    if (isUpLarge) {
      setSliderWrapperWidth(LARGE_SWIPER_WRAPPER_WIDTH);
      return;
    }

    if (isMedium) {
      setSliderWrapperWidth(MEDIUM_SWIPER_WRAPPER_WIDTH);
      return;
    }

    setSliderWrapperWidth(SMALL_SWIPER_WRAPPER_WIDTH);
  }, [isUpLarge, isMedium]);

  return (
    <Box>
      <Box>
        <Typography variant='h5' fontWeight='bold' sx={{ mt: 10 }}>
          <Box component='span' color='primary.main'>
            {storeDetailData?.store_location}
          </Box>{' '}
          지역 매물 | {data.data.length + '개'}
        </Typography>
        <Divider sx={{ my: 2 }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          '& .swiper-wrapper': {
            width: slideWrapperWidth,
          },
        }}
      >
        <SwiperPrevButton swiperRef={swiperRef} />
        <Swiper
          className='main-swiper'
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={slidePerView}
          modules={[Pagination]}
          autoplay
          mousewheel
          loop
          pagination={{ clickable: true }}
        >
          {data.data.map((storeData, index) => (
            <SwiperSlide key={'store-detail-local-store--' + index}>
              <VerticalStoreCard storeData={storeData} size='sm' />
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperNextButton swiperRef={swiperRef} />
      </Box>
    </Box>
  );
};

export default LocalStoreSection;
