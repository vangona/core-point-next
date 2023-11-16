import { Box } from '@mui/material';
import { useGetStore } from '@/api/store/useGetStore';
import { StoreCard } from '../common/store-card';
import StoreWindow from './StoreWindow';

const StoreResult = () => {
  const query = useGetStore();
  const storeData = query.data?.data;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
      }}
    >
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
              key={'store' + index + ', id-' + store.store_id}
              storeData={store}
            />
          ))
        ) : (
          <StoreCard storeData={undefined} />
        )}
      </Box>
      <StoreWindow />
    </Box>
  );
};

export default StoreResult;
