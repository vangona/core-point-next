'use client';

import { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Store, getStoreDetail } from '@/api/store';
import ContainedListItem from '@/components/common/contained-list/ContainedList';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import { ImageSection } from '@/components/store-detail/image-section';
import StoreDetailPieChart from '@/components/store-detail/pie-chart/StoreDetailPieChart';
import StoreDetailWindow from '@/components/store-detail/pie-chart/StoreDetailWindow';
import { DIMMED_GRAY } from '@/constants/color';
import { convertMoneyString } from '@/utils';
import { LOCALSTORAGE_RECENT_STORE_KEY } from './constants';

interface StoreDetailPageProps {
  params: { id: string };
}
const StoreDetailPage = ({ params }: StoreDetailPageProps) => {
  const { id } = params;
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [layoutWidth, setLayoutWidth] = useState(LARGE_LAYOUT_WIDTH);

  const { data: storeDetailData } = useSuspenseQuery({
    queryKey: ['store-detail', id],
    queryFn: async (): Promise<Store | undefined> => {
      const data = await getStoreDetail({ id });
      return data.data ? data.data[0] : undefined;
    },
  });

  const parsedExpenditureData: [string, number][] = storeDetailData
    ? [
        ['인건비', storeDetailData.personal_cost],
        ['재료비', storeDetailData.material_cost],
        ['임대료', storeDetailData.rent_cost],
        ['공과금', storeDetailData.dues_cost],
        ['기타잡비', storeDetailData.etc_cost],
      ]
    : [];

  useEffect(() => {
    if (isUpLarge) {
      setLayoutWidth(LARGE_LAYOUT_WIDTH);
      return;
    }

    if (isMedium) {
      setLayoutWidth(MEDIUM_LAYOUT_WIDTH);
      return;
    }

    setLayoutWidth(SMALL_LAYOUT_WIDTH);
  }, [isUpLarge, isMedium]);

  // 최근 조회한 매물에 추가
  useEffect(() => {
    const recentStores = localStorage.getItem(LOCALSTORAGE_RECENT_STORE_KEY);
    if (!recentStores) {
      const newRecentStores = [params.id];
      localStorage.setItem(
        LOCALSTORAGE_RECENT_STORE_KEY,
        JSON.stringify(newRecentStores),
      );
      return;
    }

    const parsedStores: string[] = JSON.parse(recentStores);
    if (!parsedStores.includes(params.id)) {
      const newRecentStores =
        parsedStores.length === 3 ? parsedStores.slice(1, 3) : parsedStores;
      newRecentStores.push(params.id);
      localStorage.setItem(
        LOCALSTORAGE_RECENT_STORE_KEY,
        JSON.stringify(newRecentStores),
      );
      return;
    }
  }, [params.id]);

  return (
    <Box
      sx={{
        width: layoutWidth,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mb: 10,
      }}
    >
      <Typography
        variant='h4'
        fontWeight='bold'
        align='center'
        sx={{ mt: 8, mb: 3 }}
      >
        {storeDetailData?.store_name}
      </Typography>
      <ParagraphDivider />
      <Box sx={{ mt: 3, display: 'flex', gap: 8 }}>
        <ImageSection imgSrcArr={storeDetailData?.store_img_src_arr} />
        <Box sx={{ width: '500px' }}>
          <Typography variant='h5' fontWeight='bold' sx={{ mb: 2 }}>
            매출내역
          </Typography>
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
      </Box>
      <Box sx={{ mt: 5, display: 'flex', gap: 5 }}>
        <Box sx={{ width: '750px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Box sx={{ width: '100%' }}>
              <Typography variant='h5' fontWeight='bold'>
                지출 세부내역
              </Typography>
              <Divider sx={{ my: 2 }} />
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  padding: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                }}
              >
                <ContainedListItem
                  label='매출'
                  value={convertMoneyString(storeDetailData?.monthly_sales)}
                />
                {parsedExpenditureData.length > 0 &&
                  parsedExpenditureData.map(([label, value], index) => (
                    <ContainedListItem
                      key={index + label}
                      label={label}
                      value={'- ' + convertMoneyString(value)}
                    />
                  ))}
                <ContainedListItem
                  primary
                  label='수익'
                  value={convertMoneyString(storeDetailData?.monthly_revenue)}
                />
              </Box>
              {parsedExpenditureData.length > 0 && (
                <StoreDetailPieChart
                  parsedExpenditureData={parsedExpenditureData}
                />
              )}
            </Box>
          </Box>
          {storeDetailData?.description && (
            <>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
              >
                <Box>
                  <Typography variant='h5' fontWeight='bold' sx={{ mt: 6 }}>
                    상세 설명
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                </Box>
                <Box
                  sx={{
                    width: '700px',
                    minHeight: '300px',
                    padding: 3,
                    backgroundColor: DIMMED_GRAY,
                  }}
                >
                  {storeDetailData?.description}
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <Button sx={{ width: '300px', mt: 4 }} variant='contained'>
                  상담 신청하기
                </Button>
              </Box>
            </>
          )}
        </Box>
        <StoreDetailWindow storeDetailData={storeDetailData} />
      </Box>
      <Box>
        <Box>
          <Typography variant='h5' fontWeight='bold' sx={{ mt: 10 }}>
            지역 매물
          </Typography>
          <Divider sx={{ my: 2 }} />
        </Box>
        <Box sx={{ mt: 5 }}>
          <VerticalStoreCard size='sm' />
        </Box>
      </Box>
    </Box>
  );
};

export default StoreDetailPage;
