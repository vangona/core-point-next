'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { Store } from '@/api/store';
import { CorePointRoutes } from '@/constants/routes';
import { convertMoneyString } from '@/utils';
import { AltImage } from '../alt-image';
import { BoldLabelValue } from '../store-card/elements';
import type { SxProps, TypographyVariant } from '@mui/material';

interface VerticalStoreCardProps {
  size?: 'md' | 'sm';
  storeData?: Store;
  onCardClick?: (isPathChanged?: boolean) => void;
}
const VerticalStoreCard = (props: VerticalStoreCardProps) => {
  const { size = 'md', storeData, onCardClick } = props;
  const router = useRouter();

  const isSmall = size === 'sm';
  const cardTitleTypo: TypographyVariant = isSmall ? 'subtitle1' : 'h6';
  const cardTypo: TypographyVariant = isSmall ? 'subtitle2' : 'subtitle1';

  const containerSx: SxProps = {
    flexShrink: 0,
    width: isSmall ? '180px' : '240px',
    height: isSmall ? '240px' : '350px',
    margin: 3,
  };

  const actionAreaSx: SxProps = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  const handleCardClick = (storeId?: string) => {
    if (!storeId) return;
    onCardClick && onCardClick();
    router.push(CorePointRoutes.STORE + '/' + storeId);
  };

  return (
    <Tooltip title={storeData?.store_name}>
      <Card raised sx={containerSx}>
        <CardActionArea
          sx={actionAreaSx}
          onClick={() => handleCardClick(storeData?.store_id)}
        >
          <CardMedia
            sx={{
              flexGrow: 1,
              flexShrink: 0,
              position: 'relative',
              height: isSmall ? '120px' : '180px',
              width: '100%',
            }}
          >
            <AltImage
              fill
              objectFit='cover'
              src={
                Array.isArray(storeData?.store_img_src_arr)
                  ? storeData?.store_img_src_arr[0]
                  : undefined
              }
              alt='store image'
            />
          </CardMedia>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
              <Typography align='center' variant='caption'>
                [ 매물번호 {storeData?.store_number} ]
              </Typography>
              <Typography
                align='center'
                variant={cardTitleTypo}
                component='h3'
                sx={{
                  width: isSmall ? '150px' : '200px',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {storeData?.store_name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}
            >
              <BoldLabelValue
                primary
                label='월 수익'
                value={convertMoneyString(storeData?.monthly_revenue)}
                variant={cardTypo}
              />
              <BoldLabelValue
                label={isSmall ? '비용' : '창업 비용'}
                value={convertMoneyString(storeData?.store_cost)}
                variant={cardTypo}
              />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
};

export default VerticalStoreCard;
