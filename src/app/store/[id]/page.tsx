'use client';

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import Image from 'next/image';
import { useGetStoreDetail } from '@/api/store';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import { DIMMED_GRAY } from '@/constants/color';
import { LOCALSTORAGE_RECENT_STORE_KEY } from './constants';

interface StoreDetailPageProps {
  params: { id: string };
}
const StoreDetailPage = (props: StoreDetailPageProps) => {
  const { params } = props;
  const { data: storeDetailData } = useGetStoreDetail({ id: params.id });

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
      <Box>
        {/* <StoreDetailWindow /> */}
        <Box sx={{ display: 'flex' }}>
          <Box>
            <Typography variant='h5'>지출 세부내역</Typography>
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
            <Box>
              <PieChart
                width={300}
                height={300}
                series={[
                  {
                    data: parsedExpenditureData.map(
                      ([label, value], index) => ({
                        id: index + label,
                        value,
                        label,
                      }),
                    ),
                    arcLabel: (item) =>
                      `${item.label} / ${item.value.toLocaleString('ko-KR')}`,
                    cornerRadius: 4,
                    arcLabelMinAngle: 45,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: {
                      innerRadius: 30,
                      additionalRadius: -30,
                      color: 'gray',
                    },
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontWeight: 'bold',
                    fontSize: '14px',
                  },
                }}
              />
            </Box>
          )}
        </Box>
        <Box>
          <Typography variant='h5'>상세 설명</Typography>
          <Box sx={{ height: '600px', backgroundColor: DIMMED_GRAY }}>
            {storeDetailData?.storeData?.description}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StoreDetailPage;
