import { Suspense, useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { getStoreMinimum, useGetStore } from '@/api/store';
import { LOCALSTORAGE_RECENT_STORE_KEY } from '@/app/store/[id]/constants';
import { StoreSearchParams } from '@/app/store/page';
import {
  DEFAULT_WINDOW_WIDTH,
  DEFAULT_WINDOW_HEIGHT,
} from '@/components/store/constants';
import StoreCards from '@/components/store/StoreCards';
import StoreResultLoading from '@/components/store/StoreResultLoading';

const StoreWindow = dynamic(() => import('./StoreWindow'), {
  ssr: false,
  loading: () => (
    <Skeleton
      sx={{
        width: DEFAULT_WINDOW_WIDTH,
        height: DEFAULT_WINDOW_HEIGHT,
      }}
    />
  ),
});

interface StoreDataProps {
  isDownLarge: boolean;
  searchParams: StoreSearchParams;
  handleStoreChange: (newStoreName?: string) => void;
  openModal: () => void;
}
const StoreData = ({
  isDownLarge,
  searchParams,
  handleStoreChange,
  openModal,
}: StoreDataProps) => {
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
    <>
      <Suspense fallback={<StoreResultLoading />}>
        <StoreCards
          storeData={storeData}
          handleStoreChange={handleStoreChange}
          openModal={openModal}
        />
      </Suspense>
      {!isDownLarge && (
        <StoreWindow
          storeData={minimumData?.data}
          isLoading={isMinimumLoading || !recentStores} // data 로딩 중이거나 recentStores를 아직 localStorage에서 가져오지 않았다면 isLoading ture
          openModal={openModal}
          handleStoreChange={handleStoreChange}
        />
      )}
    </>
  );
};

export default StoreData;
