'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { Store } from '@/api/store';
import { SMALL_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import { CorePointRoutes } from '@/constants/routes';
import { convertMoneyString } from '@/utils';
import { AltImage } from '../alt-image';
import { BoldLabelValue } from './elements';
import type { SxProps } from '@mui/system';

const LARGE_CARD_WIDTH = 900;
const SMALL_CARD_WIDTH = SMALL_LAYOUT_WIDTH;

const LARGE_CARD_HEIGHT = 200;
const MANAGER_WIDTH = '180px';
export interface StoreCardProps {
  storeData?: Store;
  isLoading?: boolean;
  sx?: SxProps;
  handleStoreChange?: (newStoreName?: string) => void;
  openModal?: () => void;
  onCardClick?: () => void;
}
const StoreCard = (props: StoreCardProps) => {
  const {
    storeData,
    isLoading,
    sx,
    handleStoreChange,
    openModal,
    onCardClick,
  } = props;
  const theme = useTheme();
  const router = useRouter();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [imgSrc, setImgSrc] = useState<undefined | string>(undefined);
  const [cardWidth, setCardWidth] = useState<string | number>(LARGE_CARD_WIDTH);

  const STORE_NAME_TYPO = isUpLarge ? 'h5' : 'subtitle1';

  const containerSx: SxProps = {
    maxWidth: cardWidth,
    height: LARGE_CARD_HEIGHT,
    display: 'flex',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: theme.palette.divider,
    ...sx,
  };

  const imgWrapperSx: SxProps = {
    position: 'relative',
    width: LARGE_CARD_HEIGHT,
    height: LARGE_CARD_HEIGHT,
    borderRight: '1px solid',
    borderColor: 'divider',
  };

  const infoWrapperSx: SxProps = {
    maxWidth: `calc(100% - ${LARGE_CARD_HEIGHT})`,
    flexGrow: 1,
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
  };

  const titleSx: SxProps = {
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    color: theme.palette.primary.main,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const infoGridSx: SxProps = {
    display: 'grid',
    gridTemplateColumns: !isDownMedium ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
    gridTemplateRows: !isDownMedium ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)',
    rowGap: 1,
    marginTop: 3,
  };

  const managerWrapperSx: SxProps = {
    maxWidth: MANAGER_WIDTH,
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
    onCardClick && onCardClick();
    router.push(CorePointRoutes.STORE + '/' + storeId);
  };

  const handleConsultingClick = (newStoreName?: string) => {
    handleStoreChange && handleStoreChange(newStoreName);
    openModal && openModal();
  };

  useEffect(() => {
    if (!storeData) return;

    if (
      Array.isArray(storeData?.store_img_src_arr) &&
      storeData.store_img_src_arr.length > 0
    ) {
      setImgSrc(storeData?.store_img_src_arr[0]);
      return;
    }

    setImgSrc('/core-icon.png');
  }, [storeData]);

  useEffect(() => {
    if (isUpLarge) {
      setCardWidth(LARGE_CARD_WIDTH);
      return;
    }

    if (isDownLarge) {
      setCardWidth(SMALL_CARD_WIDTH);
      return;
    }
  }, [isUpLarge, isDownLarge]);

  return (
    <Tooltip title={storeData?.store_name}>
      <Card sx={containerSx} variant='elevation'>
        {storeData ? (
          <>
            <CardActionArea
              sx={{
                maxWidth: `calc(100% - ${MANAGER_WIDTH})`,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
              onClick={() => handleCardClick(storeData?.store_id)}
            >
              <CardMedia sx={imgWrapperSx}>
                {isLoading && (
                  <Skeleton variant='rounded' animation='wave' height='100%' />
                )}
                {!isLoading && (
                  <AltImage
                    loading='lazy'
                    src={imgSrc}
                    fill
                    alt='store image'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  />
                )}
              </CardMedia>
              <CardContent sx={infoWrapperSx}>
                <Typography
                  sx={titleSx}
                  variant={STORE_NAME_TYPO}
                  fontWeight='bold'
                  component='h4'
                >
                  {storeData?.store_name}
                </Typography>
                <Box sx={infoGridSx}>
                  {!isDownMedium && (
                    <>
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
                    </>
                  )}
                  <BoldLabelValue
                    label='월 매출'
                    value={convertMoneyString(storeData?.monthly_sales)}
                  />
                  <BoldLabelValue
                    label='업종'
                    value={storeData?.store_category}
                  />
                  <BoldLabelValue
                    label='월 수익'
                    value={convertMoneyString(storeData?.monthly_revenue)}
                  />
                </Box>
              </CardContent>
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
              <Button
                variant='contained'
                sx={{ whiteSpace: 'nowrap' }}
                onClick={() => handleConsultingClick(storeData.store_name)}
              >
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
    </Tooltip>
  );
};

export default StoreCard;
