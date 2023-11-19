import { useRef } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { register } from 'swiper/element/bundle';
import { Store } from '@/api/store';
import { SectionTitle } from '@/components/common/section-title';
import SwiperNextButton from '@/components/common/swiper/SwiperNextButton';
import SwiperPrevButton from '@/components/common/swiper/SwiperPrevButton';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import SectionLayout from '../section-layout/SectionLayout';

register();

interface RecommendedStoreProps {
  storeDataArr: Store[];
  isLoading: boolean;
  ref?: (node?: Element | null) => void;
}
const RecommendedStore = (props: RecommendedStoreProps) => {
  const { storeDataArr, isLoading, ref } = props;
  const swiperRef = useRef(null);

  return (
    <SectionLayout disableDivider>
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
          <swiper-container slides-per-view={4} ref={swiperRef}>
            <SwiperPrevButton swiperRef={swiperRef} />
            {storeDataArr.map((storeData, index) => (
              <swiper-slide key={'recommended-store-' + index}>
                <VerticalStoreCard storeData={storeData} />
              </swiper-slide>
            ))}
            <SwiperNextButton swiperRef={swiperRef} />
          </swiper-container>
        )}
      </Box>
    </SectionLayout>
  );
};

export default RecommendedStore;
