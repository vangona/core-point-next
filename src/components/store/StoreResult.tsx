import React from 'react';
import { Box, Pagination, Typography } from '@mui/material';
import { dummyStore } from '@/app/store/dummyStore';
import { ParagraphDivider } from '../common/paragraph-divider';
import { StoreCard } from '../common/store-card';

const StoreResult = () => {
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
        {dummyStore.slice(0, 20).map((store, index) => (
          <StoreCard
            key={'store' + index + ', id-' + store.storeId}
            storeData={store}
          />
        ))}
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
