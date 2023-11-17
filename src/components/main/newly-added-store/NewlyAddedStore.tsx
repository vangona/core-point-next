'use client';

import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { SectionTitle } from '@/components/common/section-title';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import SectionLayout from '../section-layout/SectionLayout';

const NewlyAddedStore = () => {
  return (
    <SectionLayout>
      <SectionTitle label='신규 매물' />
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <IconButton>
          <ArrowLeft />
        </IconButton>
        {/* {dummyStore.slice(0, 5).map((store, index) => (
          <VerticalStoreCard
            key={store.storeId + index}
            storeData={store}
            size='sm'
          />
        ))} */}
        <IconButton>
          <ArrowRight />
        </IconButton>
      </Box>
    </SectionLayout>
  );
};

export default NewlyAddedStore;
