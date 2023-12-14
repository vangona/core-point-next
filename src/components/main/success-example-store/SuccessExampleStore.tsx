'use client';

import dynamic from 'next/dynamic';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import SectionLayout from '../section-layout/SectionLayout';
import SectionSkeleton from '../section-skeleton/SectionSkeleton';

const SuccessExampleStoreSwiper = dynamic(
  () => import('./SuccessExampleStoreSwiper'),
  { ssr: false, loading: () => <SectionSkeleton /> },
);

const SuccessExampleStore = () => {
  return (
    <SectionLayout color='white'>
      <SectionTitle label='창업 성공 사례' />
      <ParagraphDivider />
      <SuccessExampleStoreSwiper />
    </SectionLayout>
  );
};

export default SuccessExampleStore;
