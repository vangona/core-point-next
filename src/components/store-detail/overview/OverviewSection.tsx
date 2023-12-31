import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { Store } from '@/api/store';
import ContainedListItem from '@/components/common/contained-list/ContainedList';
import { convertMoneyString } from '@/utils';

interface OverviewSectionProps {
  title?: React.ReactNode;
  storeDetailData?: Store;
}
const OverviewSection = ({ title, storeDetailData }: OverviewSectionProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box sx={{ width: '100%' }}>
        <Typography variant='h5' fontWeight='bold' width='100%'>
          {title ?? '개요'}
        </Typography>
        <Divider sx={{ my: 1 }} />
      </Box>
      {storeDetailData ? (
        <Box>
          <Card sx={{ px: 3, py: 2 }}>
            <Typography variant='subtitle1'>
              {storeDetailData?.store_location}﹒
              {storeDetailData?.store_category}﹒{storeDetailData?.store_size}
              평({storeDetailData?.store_size_m2} m<sup>2</sup>)
            </Typography>
          </Card>
          <ContainedListItem
            label='월 매출'
            value={convertMoneyString(storeDetailData?.monthly_sales)}
          />
          <ContainedListItem
            label='월 수익'
            value={convertMoneyString(storeDetailData?.monthly_revenue)}
          />
          <ContainedListItem
            label='창업 비용'
            value={convertMoneyString(storeDetailData?.store_cost)}
          />
          <ContainedListItem
            label='담당자'
            value={`${storeDetailData?.manager}(${storeDetailData?.manager_contact})`}
          />
        </Box>
      ) : (
        <Skeleton height='200px' />
      )}
    </Box>
  );
};

export default OverviewSection;
