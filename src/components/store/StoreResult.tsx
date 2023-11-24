import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { StoreSearchParams } from '@/app/store/page';
import { ConsultingModal } from '../common/consulting-modal';
import StoreData from './StoreData';

interface StoreResultProps {
  searchParams: StoreSearchParams;
}
const StoreResult = ({ searchParams }: StoreResultProps) => {
  const theme = useTheme();
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));

  const [currentStoreName, setCurrentStoreName] = useState<string | undefined>(
    '',
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStoreChange = (newStoreName?: string) => {
    setCurrentStoreName(newStoreName);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        gap: 3,
        justifyContent: 'space-between',
      }}
    >
      <StoreData
        isDownLarge={isDownLarge}
        searchParams={searchParams}
        handleStoreChange={handleStoreChange}
        openModal={openModal}
      />
      <ConsultingModal
        open={isModalOpen}
        onClose={closeModal}
        initialValue={{
          additional: currentStoreName
            ? `'${currentStoreName}' 관련 문의`
            : undefined,
        }}
      />
    </Box>
  );
};

export default StoreResult;
