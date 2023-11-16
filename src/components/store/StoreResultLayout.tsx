import React from 'react';
import { Box, Typography } from '@mui/material';
import { ParagraphDivider } from '../common/paragraph-divider';

interface StoreResultLayoutProps {
  children: React.ReactNode;
}
const StoreResultLayout = ({ children }: StoreResultLayoutProps) => {
  return (
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
      {children}
    </Box>
  );
};

export default StoreResultLayout;
