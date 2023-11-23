import { SectionTitle } from '@/components/common/section-title';
import React from 'react';
import { SectionLayout } from '../section-layout';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import RecommendedBrands from './RecommendedBrands';

const RecommendedBrand = () => {
  return (
    <SectionLayout color='white'>
      <SectionTitle label='창업 추천 브랜드' />
      <ParagraphDivider />
      <RecommendedBrands />
    </SectionLayout>
  );
};

export default RecommendedBrand;
