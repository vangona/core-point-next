import { Suspense, useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useGetStore } from '@/api/store';
import { getStoreMinimum } from '@/api/store/getStoreMinimum';
import { LOCALSTORAGE_RECENT_STORE_KEY } from '@/app/store/[id]/constants';
import { StoreSearchParams } from '@/app/store/page';
import StoreCards from './StoreCards';
import StoreResultLoading from './StoreResultLoading';

const StoreWindow = dynamic(() => import('./StoreWindow'), { ssr: false }); // store window는 localstorage 사용하기 때문에 ssr false

interface StoreResultProps {
  searchParams: StoreSearchParams;
}
const StoreResult = ({ searchParams }: StoreResultProps) => {
  const theme = useTheme();
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const { data } = useGetStore(searchParams);
  const storeData = data?.data;

  const [recentStores, setRecentStores] = useState<string[] | undefined>(
    undefined,
  );

  const { data: minimumData, isLoading: isMinimumLoading } = useQuery({
    queryKey: ['store-minimum', recentStores],
    queryFn: () => getStoreMinimum({ idArr: recentStores }),
    enabled: recentStores !== undefined,
  });

  useEffect(() => {
    const localStorageRecentStores = localStorage.getItem(
      LOCALSTORAGE_RECENT_STORE_KEY,
    );
    const parsedRecentStores: string[] = localStorageRecentStores
      ? JSON.parse(localStorageRecentStores)
      : [];
    setRecentStores(parsedRecentStores);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 3,
        justifyContent: 'space-between',
      }}
    >
      <Suspense fallback={<StoreResultLoading />}>
        <StoreCards storeData={storeData} />
      </Suspense>
      {!isDownLarge && (
        <StoreWindow
          storeData={minimumData?.data}
          isLoading={isMinimumLoading || !recentStores} // data 로딩 중이거나 recentStores를 아직 localStorage에서 가져오지 않았다면 isLoading ture
        />
      )}
    </Box>
  );
};

export default StoreResult;
