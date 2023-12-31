import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Store } from '@/api/store';
import ContainedListItem from '@/components/common/contained-list/ContainedList';
import { convertMoneyString } from '@/utils';

interface SalesDetailSectionProps {
  storeDetailData?: Store;
  fullWidth?: boolean;
}
const SalesDetailSection = ({
  storeDetailData,
  fullWidth,
}: SalesDetailSectionProps) => {
  return (
    <Box
      sx={{
        width: fullWidth ? '100%' : '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <Box>
        <Typography variant='h5' fontWeight='bold' sx={{ mb: 2 }}>
          매출내역
        </Typography>
        {fullWidth && <Divider />}
        <ContainedListItem
          label='월 매출'
          value={convertMoneyString(storeDetailData?.monthly_sales)}
        />
        <ContainedListItem
          label='월 지출'
          value={convertMoneyString(storeDetailData?.monthly_cost)}
        />
        <ContainedListItem
          label='월 수익'
          value={convertMoneyString(storeDetailData?.monthly_revenue)}
        />
        <ContainedListItem
          label='매출 근거'
          value={storeDetailData?.sales_reason}
        />
      </Box>
      <Box sx={{ width: fullWidth ? '100%' : '500px' }}>
        <Typography variant='h5' fontWeight='bold' sx={{ mb: 2 }}>
          담당자 정보
        </Typography>
        {fullWidth && <Divider />}
        <ContainedListItem label='이름' value={storeDetailData?.manager} />
        <ContainedListItem
          label='연락처'
          value={storeDetailData?.manager_contact}
        />
      </Box>
    </Box>
  );
};

export default SalesDetailSection;
