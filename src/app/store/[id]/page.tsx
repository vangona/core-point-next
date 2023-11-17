'use client';

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { StoreDetail, getStoreDetail } from '@/api/store';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import StoreDetailWindow from '@/components/store/StoreDetailWindow';
import StoreDetailPieChart from '@/components/store-detail/pie-chart/StoreDetailPieChart';
import { DIMMED_GRAY } from '@/constants/color';
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
      }}
    >
      <Typography variant='h4' align='center'>
        {storeDetailData?.storeData?.store_name}
      </Typography>
      <ParagraphDivider />
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Box>
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
        </Box>
        <Box>
          <Typography variant='h5'>매출내역</Typography>
          <Box>월매출 : {storeDetailData?.storeData?.monthly_sales}</Box>
          <Box>월지출 : {storeDetailData?.storeData?.monthly_cost}</Box>
          <Box>월수익 : {storeDetailData?.storeData?.monthly_cost}</Box>
          <Box>매출근거 : {storeDetailData?.storeData?.sales_reason}</Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 5 }}>
        <Box sx={{ width: '750px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Box sx={{ width: '100%' }}>
              <Typography variant='h5'>지출 세부내역</Typography>
              <Divider sx={{ my: 2 }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Box>매출 : {storeDetailData?.storeData?.monthly_sales}</Box>
                {parsedExpenditureData.length > 0 &&
                  parsedExpenditureData.map(([label, value], index) => (
                    <Box key={index + label}>
                      {label} : {value}
                    </Box>
                  ))}
                <Box>수익 : {storeDetailData?.storeData?.monthly_revenue}</Box>
              </Box>
              {parsedExpenditureData.length > 0 && (
                <StoreDetailPieChart
                  parsedExpenditureData={parsedExpenditureData}
                />
              )}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Box>
              <Typography variant='h5'>상세 설명</Typography>
              <Divider sx={{ my: 2 }} />
            </Box>
            <Box
              sx={{
                width: '700px',
                minHeight: '300px',
                backgroundColor: DIMMED_GRAY,
              }}
            >
              {storeDetailData?.storeData?.description}
            </Box>
          </Box>
        </Box>
        <StoreDetailWindow storeDetailData={storeDetailData} />
      </Box>
    </Box>
  );
};

export default StoreDetailPage;
