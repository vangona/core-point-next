'use client';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Store } from '@/api/store';
import { SectionTitle } from '@/components/common/section-title';
import { SwiperNextButton, SwiperPrevButton } from '@/components/common/swiper';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import SectionLayout from '../section-layout/SectionLayout';

interface NewlyAddedStoreProps {
  storeDataArr: Store[];
  isLoading: boolean;
}
const NewlyAddedStore = ({ storeDataArr, isLoading }: NewlyAddedStoreProps) => {
  return (
    <SectionLayout>
      <SectionTitle label='신규 매물' />
      <Box
        sx={{
          width: DEFAULT_LAYOUT_WIDTH,
          display: 'flex',
          gap: 2,
          alignItems: 'center',
        }}
      >
        {isLoading && <Skeleton />}
        {!isLoading && (
          <Swiper
            modules={[Mousewheel, Navigation]}
            slidesPerView={5}
            grabCursor
            loop
            mousewheel
            navigation
          >
            <SwiperPrevButton />
            {storeDataArr.map((store, index) => (
              <SwiperSlide key={'newly-added-store' + index}>
                <VerticalStoreCard storeData={store} size='sm' />
              </SwiperSlide>
            ))}
            <SwiperNextButton />
          </Swiper>
        )}
      </Box>
    </SectionLayout>
  );
};

export default NewlyAddedStore;
