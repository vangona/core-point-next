import { useEffect, useRef, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Store, useGetStore } from '@/api/store';
import ProgressBackdrop from '@/components/common/progress-backdrop/ProgressBackdrop';
import { SwiperNextButton, SwiperPrevButton } from '@/components/common/swiper';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';

const LARGE_SWIPER_WRAPPER_WIDTH = 1100;
const MEDIUM_SWIPER_WRAPPER_WIDTH = 700;
const SMALL_SWIPER_WRAPPER_WIDTH = 400;

const LARGE_SLIDE_PER_VIEW = 4;
const MEDIUM_SLIDE_PER_VIEW = 3;
const SMALL_SLIDE_PER_VIEW = 1;

interface LocalStoreSectionProps {
  storeDetailData?: Store;
}
const LocalStoreSection = ({ storeDetailData }: LocalStoreSectionProps) => {
  const theme = useTheme();
  const pathname = usePathname();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));

  const { data, isLoading } = useGetStore({
    location: storeDetailData?.store_location,
  });

  const filteredData = data?.data.filter(
    (storeData) => storeData.store_id !== storeDetailData?.store_id,
  );

  const [slidePerView, setSlidePerView] = useState(4);
  const [slideWrapperWidth, setSliderWrapperWidth] = useState(
    LARGE_SWIPER_WRAPPER_WIDTH,
  );
  const swiperRef = useRef<SwiperClass>();

  const [isBackdrop, setIsBackdrop] = useState(false);

  const onCardClick = () => {
    setIsBackdrop(true);
  };

  useEffect(() => {
    if (isUpLarge) {
      setSliderWrapperWidth(LARGE_SWIPER_WRAPPER_WIDTH);
      setSlidePerView(LARGE_SLIDE_PER_VIEW);
      return;
    }

    if (isMedium) {
      setSliderWrapperWidth(MEDIUM_SWIPER_WRAPPER_WIDTH);
      setSlidePerView(MEDIUM_SLIDE_PER_VIEW);
      return;
    }

    setSliderWrapperWidth(SMALL_SWIPER_WRAPPER_WIDTH);
    setSlidePerView(SMALL_SLIDE_PER_VIEW);
  }, [isUpLarge, isMedium]);

  useEffect(() => {
    setIsBackdrop(false);
  }, [pathname]);

  return (
    filteredData &&
    filteredData.length > 0 && (
      <Box>
        <Box>
          <Typography variant='h5' fontWeight='bold' sx={{ mt: 10 }}>
            {storeDetailData?.store_location} 지역 매물
            {/* {filteredData?.length + '개'} */}
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
            pagination={{ clickable: true }}
          >
            {filteredData &&
              filteredData.map((storeData, index) => (
                <SwiperSlide key={'store-detail-local-store--' + index}>
                  <VerticalStoreCard
                    storeData={storeData}
                    size='sm'
                    onCardClick={onCardClick}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <SwiperNextButton swiperRef={swiperRef} />
        </Box>
        <ProgressBackdrop open={isBackdrop} />
      </Box>
    )
  );
};

export default LocalStoreSection;
