import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Store } from '@/api/store';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';

interface LocalStoreSectionProps {
  storeDetailData?: Store;
}
const LocalStoreSection = ({ storeDetailData }: LocalStoreSectionProps) => {
  return (
    <Box>
      <Box>
        <Typography variant='h5' fontWeight='bold' sx={{ mt: 10 }}>
          지역 매물
        </Typography>
        <Divider sx={{ my: 2 }} />
      </Box>
      <Box sx={{ mt: 5 }}>
        <VerticalStoreCard size='sm' />
      </Box>
    </Box>
  );
};

export default LocalStoreSection;
