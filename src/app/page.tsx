'use client';

import Box from '@mui/material/Box';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useGetStore } from '@/api/store';
import { getNewStore } from '@/api/store/getNewStore';
import HideScrollTop from '@/components/common/hide-scroll-top/HideScrollTop';
import { SectionTitle } from '@/components/common/section-title';
import { BottomSection } from '@/components/main/bottom-section';
import { MainHero } from '@/components/main/main-hero';
import NewlyAddedStore from '@/components/main/newly-added-store/NewlyAddedStore';
import RecommendedStore from '@/components/main/recommended-store/RecommendedStore';
import { SectionLayout } from '@/components/main/section-layout';
import SuccessExample from '@/components/main/success-example-store/SuccessExampleStore';

export default function Home() {
  const { data, isLoading } = useGetStore({ page: '1', limit: '20' });
  const { data: newStores, isLoading: isNewStoreLoading } = useSuspenseQuery({
    queryKey: ['store-new'],
    queryFn: () => getNewStore(),
  });

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 3,
        paddingBottom: 10,
      }}
    >
      <MainHero />
      <RecommendedStore storeDataArr={data.data} isLoading={isLoading} />
      <SuccessExample />
      <NewlyAddedStore
        storeDataArr={newStores.data}
        isLoading={isNewStoreLoading}
      />
      <SectionLayout color='white'>
        <SectionTitle label='협업 브랜드' />
      </SectionLayout>
      <BottomSection />
      <HideScrollTop />
    </Box>
  );
}
