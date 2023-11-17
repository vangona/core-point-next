import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { StoreDetail } from '@/api/store';

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
        height: 550,
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
      <Button size='large' variant='contained'>
        상담 신청하기
      </Button>
    </Card>
  );
};

export default StoreDetailWindow;
