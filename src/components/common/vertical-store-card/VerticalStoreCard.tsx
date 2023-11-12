'use client';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Store } from '@/types';
import { BoldLabelValue } from '../store-card/elements';
import type { SxProps, TypographyVariant } from '@mui/material';

interface VerticalStoreCardProps {
  size?: 'md' | 'sm';
  storeData?: Store;
}
const VerticalStoreCard = (props: VerticalStoreCardProps) => {
  const { size = 'md', storeData } = props;
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

  return (
    <Card raised sx={containerSx}>
      <CardActionArea sx={actionAreaSx} onClick={() => alert('clicked!')}>
        <CardMedia
          component='img'
          height={isSmall ? '120px' : '180px'}
          image={
            Array.isArray(storeData?.storeImgSrcArr)
              ? storeData?.storeImgSrcArr[0]
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
              {storeData?.storeName}
            </Typography>
          </Box>
          <Box sx={{ width: '100%', padding: 1, marginTop: 2 }}>
            <BoldLabelValue
              label='비용'
              value={storeData?.storeCost.toLocaleString('ko-KR') + '원'}
              variant={cardTypo}
            />
            <BoldLabelValue
              label='월수익'
              value={storeData?.storeRevenue.toLocaleString('ko-KR') + '원'}
              variant={cardTypo}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VerticalStoreCard;
