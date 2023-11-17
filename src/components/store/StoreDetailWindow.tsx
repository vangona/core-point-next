import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { StoreDetail } from '@/api/store';
import { convertMoneyString } from '@/utils';
import ContainedListItem from '../common/contained-list/ContainedList';

interface StoreDetailWindowProps {
  storeDetailData?: StoreDetail;
}
const StoreDetailWindow = (props: StoreDetailWindowProps) => {
  const { storeDetailData } = props;
  return (
    <Card
      sx={{
        position: 'sticky',
        top: 24,
        right: 24,
        width: 400,
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        gap: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
      }}
      variant='elevation'
      raised
    >
      <Typography
        variant='subtitle1'
        fontWeight='bold'
        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
      >
        {storeDetailData?.storeData?.store_name}
      </Typography>
      <Box>
        <ContainedListItem
          primary
          label='창업 비용'
          value={convertMoneyString(storeDetailData?.storeData?.store_cost)}
        />
        <ContainedListItem
          primary
          label='월 매출'
          value={convertMoneyString(storeDetailData?.storeData?.monthly_sales)}
        />
        <ContainedListItem
          primary
          label='월 순이익'
          value={convertMoneyString(
            storeDetailData?.storeData?.monthly_revenue,
          )}
        />
        <Box sx={{ my: 2 }}>
          <Typography fontWeight='bold' variant='subtitle1'>
            개요
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Box>위치 : {storeDetailData?.storeData?.store_location}</Box>
          <Box>업종 : {storeDetailData?.storeData?.store_category}</Box>
          <Box>
            면적 : {storeDetailData?.storeData?.store_size}평 (
            {storeDetailData?.storeData?.store_size_m2} m2)
          </Box>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography fontWeight='bold' variant='subtitle1'>
            담당자 정보
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography>{storeDetailData?.storeData?.manager}</Typography>
          <Typography>{storeDetailData?.storeData?.manager_contact}</Typography>
        </Box>
      </Box>
      <Button size='large' variant='contained'>
        상담 신청하기
      </Button>
    </Card>
  );
};

export default StoreDetailWindow;
