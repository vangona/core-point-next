'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getNewStore } from '@/api/store';
import { getRecommendedStore } from '@/api/store/getRecommendedStore';
import HideScrollTop from '@/components/common/hide-scroll-top/HideScrollTop';
import { SectionTitle } from '@/components/common/section-title';
import { BottomSection } from '@/components/main/bottom-section';
import { MainHero } from '@/components/main/main-hero';
import NewlyAddedStore from '@/components/main/newly-added-store/NewlyAddedStore';
import RecommendedStore from '@/components/main/recommended-store/RecommendedStore';
import { SectionLayout } from '@/components/main/section-layout';
import SuccessExample from '@/components/main/success-example-store/SuccessExampleStore';

const MainContent = () => {
  const { data: newStores, isLoading: isNewStoreLoading } = useSuspenseQuery({
    queryKey: ['store-new'],
    queryFn: () => getNewStore(),
  });
  const { data: recommendedStores, isLoading: isRecommendedStoreLoading } =
    useSuspenseQuery({
      queryKey: ['store-recommended'],
      queryFn: () => getRecommendedStore(),
    });

  return (
    <>
      <MainHero />
      <RecommendedStore
        storeDataArr={recommendedStores.data}
        isLoading={isRecommendedStoreLoading}
      />
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
    </>
  );
};

export default MainContent;
