'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Store } from '@/api/store';
import { CorePointRoutes } from '@/constants/routes';
import { convertMoneyString } from '@/utils';
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
  const [imgSrc, setImgSrc] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    if (!storeData) return;

    if (
      Array.isArray(storeData?.store_img_src_arr) &&
      storeData.store_img_src_arr.length > 0
    ) {
      setImgSrc(storeData?.store_img_src_arr[0]);
    }
  }, [storeData]);

  return (
    <Card sx={containerSx} variant='elevation'>
      {storeData ? (
        <>
          <CardActionArea
            sx={{ display: 'flex' }}
            onClick={() => handleCardClick(storeData?.store_id)}
          >
            <CardMedia sx={imgWrapperSx}>
              {!imgSrc && (
                <Skeleton variant='rounded' animation='wave' height='100%' />
              )}
              {imgSrc && (
                <Image
                  loading='lazy'
                  src={imgSrc}
                  fill
                  alt='store image'
                  placeholder='blur'
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                />
              )}
            </CardMedia>
            <Box sx={infoWrapperSx}>
              <Typography
                sx={titleSx}
                variant='subtitle1'
                fontWeight='bold'
                component='h4'
              >
                {storeData?.store_name}
              </Typography>
              <Box sx={infoGridSx}>
                <BoldLabelValue
                  label='매장 위치'
                  value={storeData?.store_location}
                />
                <BoldLabelValue
                  label='창업 비용'
                  value={convertMoneyString(storeData?.store_cost)}
                />
                <BoldLabelValue
                  label='매장 면적'
                  value={
                    `${storeData?.store_size}평` +
                    `(${storeData?.store_size_m2})`
                  }
                />
                <BoldLabelValue
                  label='월 매출'
                  value={convertMoneyString(storeData?.monthly_sales)}
                />
                <BoldLabelValue
                  label='업종'
                  value={storeData?.store_category}
                />
                <BoldLabelValue
                  label='월 수악'
                  value={convertMoneyString(storeData?.monthly_revenue)}
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
              <Typography variant='body2'>
                {storeData?.manager_contact}
              </Typography>
            </Box>
            <Button variant='contained' sx={{ whiteSpace: 'nowrap' }}>
              창업컨설팅 신청
            </Button>
          </CardActions>
        </>
      ) : (
        <Box
          sx={{
            display: 'flex',
            padding: 3,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100000px',
          }}
        >
          해당하는 매물이 없습니다.
        </Box>
      )}
    </Card>
  );
};

export default StoreCard;
