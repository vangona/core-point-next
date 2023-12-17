'use client';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import dynamic from 'next/dynamic';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import { SectionLayout } from '../section-layout';

const RecommendedBrands = dynamic(() => import('./RecommendedBrands'), {
  ssr: false,
  loading: () => <Skeleton width='100%' height='100px' />,
});

const RecommendedBrand = () => {
  return (
    <SectionLayout color='white' disableLayout>
      <SectionTitle label='창업 추천 브랜드' />
      <ParagraphDivider />
      <Box
        sx={{
          mt: 5,
          mb: 10,
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RecommendedBrands />
      </Box>
    </SectionLayout>
  );
};

export default RecommendedBrand;
