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
      {Array.isArray(storeData) && storeData.length > 0
        ? storeData.map((store, index) => (
            <StoreCard
              key={'store-card' + index + ', id-' + store.store_id}
              storeData={store}
            />
          ))
        : '조건에 해당하는 매물이 없습니다. 조건을 변경하여 다시 검색해주세요.'}
    </Box>
  );
};

export default StoreCards;
