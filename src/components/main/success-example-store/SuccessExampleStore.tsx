import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import { SuccessExampleCard } from '@/components/common/success-example-card';
import { dummySuccessExample } from '@/components/common/success-example-card/dummySuccessExample';
import SectionLayout from '../section-layout/SectionLayout';

const SuccessExampleStore = () => {
  return (
    <SectionLayout color='white'>
      <ParagraphDivider />
      <SectionTitle label='성공 사례' />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconButton size='large'>
          <ArrowLeft />
        </IconButton>
        <SuccessExampleCard successExampleData={dummySuccessExample[0]} />
        <IconButton size='large'>
          <ArrowRight />
        </IconButton>
      </Box>
    </SectionLayout>
  );
};

export default SuccessExampleStore;
