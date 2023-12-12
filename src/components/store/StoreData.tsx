import { Suspense, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import dynamic from 'next/dynamic';
import { StoreSearchParams } from '@/app/store/page';
import {
  DEFAULT_WINDOW_WIDTH,
  DEFAULT_WINDOW_HEIGHT,
} from '@/components/store/constants';
import StoreCards from '@/components/store/StoreCards';
import StoreResultLoading from '@/components/store/StoreResultLoading';
import ProgressBackdrop from '../common/progress-backdrop/ProgressBackdrop';

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
  const [isBackdrop, setIsBackdrop] = useState(false);

  const onCardClick = () => {
    setIsBackdrop(true);
  };

  return (
    <>
      <Suspense fallback={<StoreResultLoading />}>
        <StoreCards
          searchParams={searchParams}
          handleStoreChange={handleStoreChange}
          openModal={openModal}
          onCardClick={onCardClick}
        />
      </Suspense>
      {!isDownLarge && (
        <StoreWindow
          openModal={openModal}
          handleStoreChange={handleStoreChange}
          onCardClick={onCardClick}
        />
      )}
      <ProgressBackdrop open={isBackdrop} />
    </>
  );
};

export default StoreData;
