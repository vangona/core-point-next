'use client';

import { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { getStoreDetail } from '@/api/store';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import { LOCALSTORAGE_RECENT_STORE_KEY } from './constants';

const TitleSection = dynamic(
  () => import('@/components/store-detail/title-section/TitleSection'),
  { ssr: false },
);

const StoreDetailContent = dynamic(
  () =>
    import('@/components/store-detail/store-detail-content/StoreDetailContent'),
  {
    ssr: false,
    loading: () => (
      <Box
        sx={{
          width: '100%',
          height: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    ),
  },
);

interface StoreDetailPageProps {
  params: { id: string };
}
const StoreDetailPage = ({ params }: StoreDetailPageProps) => {
  const { id } = params;
  const theme = useTheme();
  const router = useRouter();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    LARGE_LAYOUT_WIDTH,
  );

  const { data: storeDetailData } = useQuery({
    queryKey: ['stores', id],
    queryFn: () => getStoreDetail({ id }),
  });

  const isValidData = storeDetailData?.data && storeDetailData?.data.length > 0;

  const parsedExpenditureData: [string, number][] = storeDetailData
    ? [
        ['인건비', isValidData ? storeDetailData.data![0].personal_cost : 0], // isValidData에서 검증하기 때문에 ! 사용
        ['재료비', isValidData ? storeDetailData.data![0].material_cost : 0],
        ['월 비용', isValidData ? storeDetailData.data![0].rent_cost : 0],
        ['공과금', isValidData ? storeDetailData.data![0].dues_cost : 0],
        ['기타잡비', isValidData ? storeDetailData.data![0].etc_cost : 0],
        ['월 수익', isValidData ? storeDetailData.data![0].monthly_revenue : 0],
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

  useEffect(() => {
    if (storeDetailData?.data?.length === 0) {
      alert('삭제된 매물입니다.');
      router.push('/store');
    }
  }, [storeDetailData, router]);

  return (
    <Box
      sx={{
        width: layoutWidth,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mb: 10,
        px: isDownMedium ? 2 : 0,
      }}
    >
      {storeDetailData?.data?.[0] && parsedExpenditureData && (
        <>
          <TitleSection storeDetailData={storeDetailData?.data?.[0]} />
          <StoreDetailContent
            storeDetailData={storeDetailData?.data?.[0]}
            parsedExpenditureData={parsedExpenditureData}
          />
        </>
      )}
    </Box>
  );
};

export default StoreDetailPage;
