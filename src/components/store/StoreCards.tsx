'use client';

import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { Store } from '@/api/store';
import { StoreCard } from '@/components/common/store-card';
import { MobileStoreCard } from '../common/mobile-store-card';

interface StoreCardsProps {
  storeData: Store[];
  isLoading?: boolean;
  handleStoreChange: (newStoreName?: string) => void;
  openModal?: () => void;
  onCardClick?: () => void;
}
const StoreCards = ({
  storeData,
  isLoading,
  handleStoreChange,
  openModal,
  onCardClick,
}: StoreCardsProps) => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      {/* <Typography>{storeData.length}개의 검색결과</Typography> */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: isDownMedium ? 1 : 3,
        }}
      >
        {Array.isArray(storeData) &&
          storeData.length === 0 &&
          '조건에 해당하는 매물이 없습니다. 조건을 변경하여 다시 검색해주세요.'}
        {!isDownMedium &&
          Array.isArray(storeData) &&
          storeData.length > 0 &&
          storeData.map((store, index) => (
            <StoreCard
              key={'store-card' + index + ', id-' + store.store_id}
              storeData={store}
              isLoading={isLoading}
              handleStoreChange={handleStoreChange}
              openModal={openModal}
              onCardClick={onCardClick}
            />
          ))}
        {isDownMedium &&
          Array.isArray(storeData) &&
          storeData.length > 0 &&
          storeData.map((store, index) => (
            <MobileStoreCard
              key={'store-card' + index + ', id-' + store.store_id}
              storeData={store}
              handleStoreChange={handleStoreChange}
              openModal={openModal}
              onCardClick={onCardClick}
            />
          ))}
      </Box>
    </Box>
  );
};

export default StoreCards;
