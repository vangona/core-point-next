'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { Store } from '@/api/store';
import { CorePointRoutes } from '@/constants/routes';
import { convertMoneyString } from '@/utils';
import { BoldLabelValue } from '../store-card/elements';
import type { SxProps, TypographyVariant } from '@mui/material';

interface VerticalStoreCardProps {
  size?: 'md' | 'sm';
  storeData?: Store;
}
const VerticalStoreCard = (props: VerticalStoreCardProps) => {
  const { size = 'md', storeData } = props;
  const router = useRouter();

  const isSmall = size === 'sm';
  const cardTitleTypo: TypographyVariant = isSmall ? 'subtitle1' : 'h6';
  const cardTypo: TypographyVariant = isSmall ? 'subtitle2' : 'subtitle1';

  const containerSx: SxProps = {
    width: isSmall ? '180px' : '270px',
    height: isSmall ? '240px' : '360px',
  };

  const actionAreaSx: SxProps = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  const handleCardClick = (storeId?: string) => {
    if (!storeId) return;
    router.push(CorePointRoutes.STORE + '/' + storeId);
  };

  return (
    <Card raised sx={containerSx}>
      <CardActionArea
        sx={actionAreaSx}
        onClick={() => handleCardClick(storeData?.store_id)}
      >
        <CardMedia
          component='img'
          sx={{
            height: isSmall ? '120px' : '180px',
            objectFit: 'cover',
          }}
          image={
            Array.isArray(storeData?.store_img_src_arr)
              ? storeData?.store_img_src_arr[0]
              : undefined
          }
          alt='store image'
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              variant={cardTitleTypo}
              component='h3'
              sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
            >
              {storeData?.store_name}
            </Typography>
          </Box>
          <Box sx={{ width: '100%', padding: 1, marginTop: 2 }}>
            <BoldLabelValue
              label='비용'
              value={convertMoneyString(storeData?.store_cost)}
              variant={cardTypo}
            />
            <BoldLabelValue
              label='월수익'
              value={convertMoneyString(storeData?.monthly_revenue)}
              variant={cardTypo}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VerticalStoreCard;
