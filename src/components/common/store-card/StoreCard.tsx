'use client';

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CorePointRoutes } from '@/constants/routes';
import { Store } from '@/types/store';
import {
  DEFAULT_STORE_CARD_HEIGHT,
  DEFAULT_STORE_CARD_WIDTH,
} from './constants';
import { BoldLabelValue } from './elements';
import type { SxProps } from '@mui/system';

export interface StoreCardProps {
  storeData?: Store;
  sx?: SxProps;
}
const StoreCard = (props: StoreCardProps) => {
  const { storeData, sx } = props;
  const theme = useTheme();
  const router = useRouter();

  const defaultImgSrc = '/logo.png';
  const firstImgSrc = Array.isArray(storeData?.storeImgSrcArr)
    ? storeData?.storeImgSrcArr[0]
    : undefined;
  const imgSrc = firstImgSrc ?? defaultImgSrc;

  const containerSx: SxProps = {
    maxWidth: DEFAULT_STORE_CARD_WIDTH,
    height: DEFAULT_STORE_CARD_HEIGHT,
    display: 'flex',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: theme.palette.divider,
    ...sx,
  };

  const imgWrapperSx: SxProps = {
    position: 'relative',
    width: DEFAULT_STORE_CARD_HEIGHT,
    height: DEFAULT_STORE_CARD_HEIGHT,
    borderRight: '1px solid',
    borderColor: 'divider',
  };

  const infoWrapperSx: SxProps = {
    flexGrow: 1,
    padding: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  };

  const titleSx: SxProps = {
    width: '100%',
    fontSize: '1.5rem',
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    color: theme.palette.primary.main,
  };

  const infoGridSx: SxProps = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    rowGap: 1,
    marginTop: 3,
  };

  const managerWrapperSx: SxProps = {
    maxWidth: 200,
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderLeft: '1px solid',
    borderColor: theme.palette.divider,
  };

  const handleCardClick = (storeId?: string) => {
    if (!storeId) return;
    router.push(CorePointRoutes.STORE + '/' + storeId);
  };

  return (
    <Card sx={containerSx} variant='outlined'>
      <CardActionArea
        sx={{ display: 'flex' }}
        onClick={() => handleCardClick(storeData?.storeId)}
      >
        <CardMedia sx={imgWrapperSx}>
          <Image src={imgSrc} fill objectFit='contain' alt='store image' />
        </CardMedia>
        <Box sx={infoWrapperSx}>
          <Typography
            sx={titleSx}
            variant='subtitle1'
            fontWeight='bold'
            component='h4'
          >
            {storeData?.storeName}
          </Typography>
          <Box sx={infoGridSx}>
            <BoldLabelValue
              label='매장 위치'
              value={storeData?.storeLocation}
            />
            <BoldLabelValue
              label='창업 비용'
              value={storeData?.storeCost.toLocaleString('ko-KR') + '원'}
            />
            <BoldLabelValue label='매장 면적' value={storeData?.storeSize} />
            <BoldLabelValue
              label='월 매출'
              value={storeData?.storeSales.toLocaleString('ko-KR') + '원'}
            />
            <BoldLabelValue label='업종' value={storeData?.storeCategory} />
            <BoldLabelValue
              label='순이익'
              value={storeData?.storeRevenue.toLocaleString('ko-KR') + '원'}
            />
          </Box>
        </Box>
      </CardActionArea>
      <CardActions sx={managerWrapperSx}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant='subtitle2' fontWeight='bold'>
            담당자 정보
          </Typography>
          <Typography variant='body2'>{storeData?.manager}</Typography>
          <Typography variant='body2'>{storeData?.managerContact}</Typography>
        </Box>
        <Button variant='contained' sx={{ whiteSpace: 'nowrap' }}>
          창업컨설팅 신청
        </Button>
      </CardActions>
    </Card>
  );
};

export default StoreCard;
