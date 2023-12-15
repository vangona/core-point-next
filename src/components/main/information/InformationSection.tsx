import Skeleton from '@mui/material/Skeleton';
import dynamic from 'next/dynamic';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import { SectionLayout } from '../section-layout';

const InformationCards = dynamic(() => import('./InformationCards'), {
  ssr: false,
  loading: () => <Skeleton width='100%' height='300px' />,
});

const InformationSection = () => {
  return (
    <SectionLayout
      color='white'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 1100,
        alignSelf: 'center',
      }}
    >
      <SectionTitle label='창업 정보' />
      <ParagraphDivider />
      <InformationCards />
    </SectionLayout>
  );
};

export default InformationSection;
