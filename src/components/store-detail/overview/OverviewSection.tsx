import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Store } from '@/api/store';
import ContainedListItem from '@/components/common/contained-list/ContainedList';
import { convertMoneyString } from '@/utils';

interface OverviewSectionProps {
  storeDetailData?: Store;
}
const OverviewSection = ({ storeDetailData }: OverviewSectionProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Typography variant='h5' fontWeight='bold'>
          개요
        </Typography>
        <Divider sx={{ my: 2 }} />
      </Box>
      <Box>
        <Card sx={{ px: 3, py: 2, my: 1 }}>
          <Typography variant='subtitle1'>
            {storeDetailData?.store_location}﹒{storeDetailData?.store_category}
            ﹒{storeDetailData?.store_size}평({storeDetailData?.store_size_m2} m
            <sup>2</sup>)
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
      </Box>
    </Box>
  );
};

export default OverviewSection;
