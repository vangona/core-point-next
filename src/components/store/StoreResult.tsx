import { Suspense, useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from '@tanstack/react-query';
import { useGetStore } from '@/api/store';
import { getStoreMinimum } from '@/api/store/getStoreMinimum';
import { LOCALSTORAGE_RECENT_STORE_KEY } from '@/app/store/[id]/constants';
import { StoreSearchParams } from '@/app/store/page';
import StoreCards from './StoreCards';
import StoreResultLoading from './StoreResultLoading';
import StoreWindow from './StoreWindow';

interface StoreResultProps {
  searchParams: StoreSearchParams;
}
const StoreResult = ({ searchParams }: StoreResultProps) => {
  const queryClient = new QueryClient();
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const query = useGetStore(searchParams);
  const storeData = query.data?.data;

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
        display: 'flex',
        gap: 3,
        width: '1200px',
        justifyContent: 'space-between',
      }}
    >
      <Suspense fallback={<StoreResultLoading />}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <StoreCards storeData={storeData} />
        </HydrationBoundary>
      </Suspense>
      {!isDownMedium && (
        <StoreWindow
          storeData={minimumData?.data}
          isLoading={isMinimumLoading || !recentStores} // data 로딩 중이거나 recentStores를 아직 localStorage에서 가져오지 않았다면 isLoading ture
        />
      )}
    </Box>
  );
};

export default StoreResult;
