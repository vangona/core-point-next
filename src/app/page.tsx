import { Box } from '@mui/material';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import { dummyStore } from './store/dummyStore';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: 3,
      }}
    >
      <h1>Home</h1>
      Home
      <ParagraphDivider />
      <VerticalStoreCard storeData={dummyStore[0]} />
      <VerticalStoreCard storeData={dummyStore[1]} size='sm' />
    </Box>
  );
}
