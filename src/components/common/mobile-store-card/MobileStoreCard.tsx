import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { StoreCardProps } from '@/components/common/store-card/StoreCard';
import { CorePointRoutes } from '@/constants/routes';
import { convertMoneyString } from '@/utils';
import { AltImage } from '../alt-image';
import { BoldLabelValue } from '../store-card/elements';

const MobileStoreCard = ({
  storeData,
  sx,
  handleStoreChange,
  openModal,
  onCardClick,
}: StoreCardProps) => {
  const router = useRouter();

  const handleCardClick = (storeId?: string) => {
    if (!storeId) return;
    onCardClick && onCardClick();
    router.push(CorePointRoutes.STORE + '/' + storeId);
  };

  const handleConsultingClick = (newStoreName?: string) => {
    handleStoreChange && handleStoreChange(newStoreName);
    openModal && openModal();
  };

  return (
    <Card sx={{ width: '100%', ...sx }}>
      <CardActionArea
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexDirection: 'column',
          px: 2,
          mb: 1,
          gap: 1,
        }}
        onClick={() => handleCardClick(storeData?.store_id)}
      >
        <Typography variant='subtitle1' component='h4' sx={{ mt: 2 }}>
          [ 매물번호 {storeData?.store_number} ] {storeData?.store_name}
        </Typography>
        <Divider sx={{ width: '100%' }} />
        <Box sx={{ display: 'flex', mt: 1 }}>
          <CardMedia
            component='div'
            sx={{
              position: 'relative',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              '& img': {
                borderRadius: '50%',
              },
              mr: 2,
              mb: 1,
            }}
          >
            <AltImage
              fill
              src={
                storeData?.store_img_src_arr
                  ? storeData?.store_img_src_arr[0]
                  : undefined
              }
              alt={storeData?.store_name + ' image'}
            />
          </CardMedia>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <BoldLabelValue
              primary
              label='월 수익'
              value={convertMoneyString(storeData?.monthly_revenue)}
            />
            <BoldLabelValue
              primary
              label='창업비용'
              value={convertMoneyString(storeData?.store_cost)}
            />
          </Box>
        </Box>
        <Box>
          <Typography variant='caption'>
            {storeData?.store_location}﹒{storeData?.store_category}﹒
            {storeData?.store_size}평({storeData?.store_size_m2} m<sup>2</sup>)
          </Typography>
        </Box>
      </CardActionArea>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Button
          variant='contained'
          size='small'
          onClick={() =>
            handleConsultingClick(
              `[ 매물번호 ${storeData?.store_number} ] ${storeData?.store_name}`,
            )
          }
        >
          창업컨설팅 신청
        </Button>
      </CardActions>
    </Card>
  );
};

export default MobileStoreCard;
