import Box from '@mui/material/Box';
import { EffectCreative, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from '@/components/common/section-title';
import { SuccessExampleCard } from '@/components/common/success-example-card';
import { dummySuccessExample } from '@/components/common/success-example-card/dummySuccessExample';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import SectionLayout from '../section-layout/SectionLayout';

const SuccessExampleStore = () => {
  return (
    <SectionLayout color='white'>
      <SectionTitle label='성공 사례' />
      <Box
        sx={{
          width: DEFAULT_LAYOUT_WIDTH,
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Swiper
          modules={[Navigation, EffectCreative, Mousewheel]}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          navigation
          grabCursor
          loop
          mousewheel
        >
          <SwiperSlide>
            <SuccessExampleCard successExampleData={dummySuccessExample[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <SuccessExampleCard successExampleData={dummySuccessExample[1]} />
          </SwiperSlide>
        </Swiper>
      </Box>
    </SectionLayout>
  );
};

export default SuccessExampleStore;
