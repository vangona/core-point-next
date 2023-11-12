import { Box } from '@mui/material';
import NewlyAddedStore from '@/components/main/newly-added-store/NewlyAddedStore';
import RecommendedStore from '@/components/main/recommended-store/RecommendedStore';
import SuccessExample from '@/components/main/success-example-store/SuccessExampleStore';
import { SectionLayout } from '@/components/main/section-layout';

export default function Home() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: 3,
      }}
    >
      <SectionLayout color='white' height='300px'>
        <h1>Home</h1>
      </SectionLayout>
      <RecommendedStore />
      <SuccessExample />
      <NewlyAddedStore />
    </Box>
  );
}
