'use client';

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { StoreDetail, getStoreDetail } from '@/api/store';
import ContainedListItem from '@/components/common/contained-list/ContainedList';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { VerticalStoreCard } from '@/components/common/vertical-store-card';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import StoreDetailWindow from '@/components/store/StoreDetailWindow';
import StoreDetailPieChart from '@/components/store-detail/pie-chart/StoreDetailPieChart';
import { DIMMED_GRAY } from '@/constants/color';
import { convertMoneyString } from '@/utils';
import { LOCALSTORAGE_RECENT_STORE_KEY } from './constants';

interface StoreDetailPageProps {
  params: { id: string };
}
const StoreDetailPage = ({ params }: StoreDetailPageProps) => {
  const { id } = params;
  const { data: storeDetailData } = useSuspenseQuery({
    queryKey: ['store-detail', id],
    queryFn: async (): Promise<StoreDetail> => {
      const data = await getStoreDetail({ id });
      return {
        storeData: data.data ? data.data[0] : undefined,
        costDetail:
          data.data && data.data[0].cost_details
            ? data.data[0].cost_details[0]
            : undefined,
      };
    },
  });

  const parsedExpenditureData: [string, number][] = storeDetailData?.costDetail
    ? [
        ['인건비', storeDetailData.costDetail.personal_cost],
        ['재료비', storeDetailData.costDetail.material_cost],
        ['임대료', storeDetailData.costDetail.rent_cost],
        ['공과금', storeDetailData.costDetail.dues_cost],
        ['기타잡비', storeDetailData.costDetail.etc_cost],
      ]
    : [];

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
        width: DEFAULT_LAYOUT_WIDTH,
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
        {storeDetailData?.storeData?.store_name}
      </Typography>
      <ParagraphDivider />
      <Box sx={{ mt: 3, display: 'flex', gap: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Card variant='elevation' raised>
            <Image
              width={450}
              height={300}
              src={
                storeDetailData?.storeData?.store_img_src_arr
                  ? storeDetailData?.storeData?.store_img_src_arr[0]
                  : ''
              }
              alt='image'
            />
          </Card>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {storeDetailData.storeData?.store_img_src_arr?.map(
              (imgSrc, index) => (
                <Card
                  key={'store-detail-image' + index}
                  sx={{ position: 'relative', width: '132px', height: '88px' }}
                >
                  <Image src={imgSrc} fill alt='store image' />
                </Card>
              ),
            )}
          </Box>
        </Box>
        <Box sx={{ width: '500px' }}>
          <Typography variant='h5' fontWeight='bold' sx={{ mb: 2 }}>
            매출내역
          </Typography>
          <ContainedListItem
            label='월 매출'
            value={convertMoneyString(storeDetailData.storeData?.monthly_sales)}
          />
          <ContainedListItem
            label='월 지출'
            value={convertMoneyString(storeDetailData?.storeData?.monthly_cost)}
          />
          <ContainedListItem
            label='월 수익'
            value={convertMoneyString(
              storeDetailData.storeData?.monthly_revenue,
            )}
          />
          <ContainedListItem
            label='매출 근거'
            value={storeDetailData.storeData?.sales_reason}
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
                  value={convertMoneyString(
                    storeDetailData?.storeData?.monthly_sales,
                  )}
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
                  value={convertMoneyString(
                    storeDetailData?.storeData?.monthly_revenue,
                  )}
                />
              </Box>
              {parsedExpenditureData.length > 0 && (
                <StoreDetailPieChart
                  parsedExpenditureData={parsedExpenditureData}
                />
              )}
            </Box>
          </Box>
          {storeDetailData?.storeData?.description && (
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
                  {storeDetailData?.storeData?.description}
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
