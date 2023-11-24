'use client';

import { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Store, getStoreDetail } from '@/api/store';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import { CostDetailSection } from '@/components/store-detail/cost-detail';
import { DescriptionSection } from '@/components/store-detail/description';
import { ImageSection } from '@/components/store-detail/image-section';
import { LocalStoreSection } from '@/components/store-detail/local-store';
import StoreDetailPieChart from '@/components/store-detail/pie-chart/StoreDetailPieChart';
import StoreDetailWindow from '@/components/store-detail/pie-chart/StoreDetailWindow';
import { SalesDetailSection } from '@/components/store-detail/sales-detail';
import { LOCALSTORAGE_RECENT_STORE_KEY } from './constants';

interface StoreDetailPageProps {
  params: { id: string };
}
const StoreDetailPage = ({ params }: StoreDetailPageProps) => {
  const { id } = params;
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    LARGE_LAYOUT_WIDTH,
  );

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
        <SalesDetailSection storeDetailData={storeDetailData} />
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
              <CostDetailSection
                storeDetailData={storeDetailData}
                parsedExpenditureData={parsedExpenditureData}
              />
              {parsedExpenditureData.length > 0 && (
                <StoreDetailPieChart
                  parsedExpenditureData={parsedExpenditureData}
                />
              )}
            </Box>
          </Box>
          {storeDetailData?.description && <DescriptionSection />}
        </Box>
        <StoreDetailWindow storeDetailData={storeDetailData} />
      </Box>
      <LocalStoreSection storeDetailData={storeDetailData} />
    </Box>
  );
};

export default StoreDetailPage;
