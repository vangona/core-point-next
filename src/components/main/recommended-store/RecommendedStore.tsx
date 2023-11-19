import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Store } from '@/api/store';
import { SectionTitle } from '@/components/common/section-title';
import SwiperNextButton from '@/components/common/swiper/SwiperNextButton';
import SwiperPrevButton from '@/components/common/swiper/SwiperPrevButton';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import SectionLayout from '../section-layout/SectionLayout';

interface RecommendedStoreProps {
  storeDataArr: Store[];
  isLoading: boolean;
  ref?: (node?: Element | null) => void;
}
const RecommendedStore = (props: RecommendedStoreProps) => {
  const { storeDataArr, isLoading, ref } = props;

  return (
    <SectionLayout>
      <SectionTitle label='추천 매물' />
      <Box
        ref={ref}
        sx={{
          width: DEFAULT_LAYOUT_WIDTH,
          display: 'flex',
          gap: 2,
          alignItems: 'center',
        }}
      >
        {isLoading && <Skeleton />}
        {!isLoading && (
          <Swiper slidesPerView={4}>
            <SwiperPrevButton />
            {storeDataArr.map((storeData, index) => (
              <SwiperSlide key={'recommended-store-' + index}>
                <VerticalStoreCard storeData={storeData} />
              </SwiperSlide>
            ))}
            <SwiperNextButton />
          </Swiper>
        )}
      </Box>
    </SectionLayout>
  );
};

export default RecommendedStore;
