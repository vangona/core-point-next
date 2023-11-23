import { SectionTitle } from '@/components/common/section-title';
import React from 'react';
import { SectionLayout } from '../section-layout';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { Box } from '@mui/material';

const RecommendedBrand = () => {
  return (
    <SectionLayout color='white'>
      <SectionTitle label='창업 추천 브랜드' />
      <ParagraphDivider />
      <Box sx={{ width: '100%' }}></Box>
    </SectionLayout>
  );
};

export default RecommendedBrand;
