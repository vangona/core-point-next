import dynamic from 'next/dynamic';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import { SectionLayout } from '@/components/main/section-layout';
import SectionSkeleton from '@/components/main/section-skeleton/SectionSkeleton';
const RecommendedStoreSwiper = dynamic(
  () => import('./RecommendedStoreSwiper'),
  {
    ssr: false,
    loading: () => <SectionSkeleton />,
  },
);

const RecommendedStore = () => {
  return (
    <SectionLayout>
      <SectionTitle
        label={'코어창업 추천 매물'}
        subTitle={'섹션별 설명 위치 (예시)'}
      />
      <ParagraphDivider />
      <RecommendedStoreSwiper />
    </SectionLayout>
  );
};

export default RecommendedStore;
