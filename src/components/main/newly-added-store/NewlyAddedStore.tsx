'use client';

import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { dummyStore } from '@/app/store/dummyStore';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import SectionLayout from '../section-layout/SectionLayout';

const NewlyAddedStore = () => {
  return (
    <SectionLayout>
      <ParagraphDivider />
      <SectionTitle label='신규 매물' />
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <IconButton>
          <ArrowLeft />
        </IconButton>
        {dummyStore.slice(0, 5).map((store, index) => (
          <VerticalStoreCard
            key={store.storeId + index}
            storeData={store}
            size='sm'
          />
        ))}
        <IconButton>
          <ArrowRight />
        </IconButton>
      </Box>
    </SectionLayout>
  );
};

export default NewlyAddedStore;
