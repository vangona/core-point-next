'use client';

import { BottomSection } from '@/components/main/bottom-section';
import { MainHero } from '@/components/main/main-hero';
import NewlyAddedStore from '@/components/main/newly-added-store/NewlyAddedStore';
import RecommendedBrand from '@/components/main/recommended-brand/RecommendedBrand';
import RecommendedStore from '@/components/main/recommended-store/RecommendedStore';
import SuccessExample from '@/components/main/success-example-store/SuccessExampleStore';
import { InformationSection } from '../information';
import ManagerSection from '../manager/ManagerSection';

const MainContent = () => {
  return (
    <>
      <MainHero />
      <RecommendedStore />
      <InformationSection />
      <SuccessExample />
      <ManagerSection />
      <NewlyAddedStore />
      <RecommendedBrand />
      <BottomSection />
    </>
  );
};

export default MainContent;
