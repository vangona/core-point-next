import Box from '@mui/material/Box';
import { Store } from '@/api/store';
import { StoreCard } from '../common/store-card';

interface StoreCardsProps {
  storeData: Store[];
}
const StoreCards = ({ storeData }: StoreCardsProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      {Array.isArray(storeData) && storeData.length > 0 ? (
        storeData.map((store, index) => (
          <StoreCard
            key={'store-card' + index + ', id-' + store.store_id}
            storeData={store}
          />
        ))
      ) : (
        <StoreCard storeData={undefined} />
      )}
    </Box>
  );
};

export default StoreCards;
