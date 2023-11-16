import { Box, Pagination, Typography } from '@mui/material';
import { Store } from '@/api/store/useGetStore';
import { ParagraphDivider } from '../common/paragraph-divider';
import { StoreCard } from '../common/store-card';
import StoreWindow from './StoreWindow';

interface StoreResultProps {
  storeData?: Store[];
}
const StoreResult = ({ storeData }: StoreResultProps) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 2,
          gap: 3,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ flexShrink: 0 }} variant='h6' component='h3'>
            매물 검색 결과
          </Typography>
          <ParagraphDivider sx={{ maxWidth: 600 }} variant='right' />
        </Box>
        {storeData ? (
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
              {storeData.map((store, index) => (
                <StoreCard
                  key={'store' + index + ', id-' + store.storeId}
                  storeData={store}
                />
              ))}
            </Box>
            <StoreWindow />
          </Box>
        ) : (
          <Box>해당하는 매물이 없습니다.</Box>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        }}
      >
        <Pagination count={10} size='large' color='primary' />
      </Box>
    </>
  );
};

export default StoreResult;
