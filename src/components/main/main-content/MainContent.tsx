'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getNewStore } from '@/api/store';
import { getRecommendedStore } from '@/api/store/getRecommendedStore';
import HideScrollTop from '@/components/common/hide-scroll-top/HideScrollTop';
import { BottomSection } from '@/components/main/bottom-section';
import { MainHero } from '@/components/main/main-hero';
import NewlyAddedStore from '@/components/main/newly-added-store/NewlyAddedStore';
import RecommendedStore from '@/components/main/recommended-store/RecommendedStore';
import SuccessExample from '@/components/main/success-example-store/SuccessExampleStore';
import RecommendedBrand from '@/components/main/recommended-brand/RecommendedBrand';

const MainContent = () => {
  return (
    <>
      <MainHero />
      <RecommendedStore />
      <SuccessExample />
      <NewlyAddedStore />
      <RecommendedBrand />
      <BottomSection />
      <HideScrollTop />
    </>
  );
};

export default MainContent;
