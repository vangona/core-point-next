import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getPartnershipBrand } from '@/api/partnership/getPartnershipBrands';
import { ConsultingModal } from '@/components/common/consulting-modal';
import '@/styles/rolling-banner.css';
import RollingBanner from './RollingBanner';

const RecommendedBrands = () => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBrandName, setCurrentBrandName] = useState('');

  const [isFirstRolling, setIsFirstRolling] = useState(true);
  const [isSecondRolling, setIsSecondRolling] = useState(true);
  const [isThirdRolling, setIsThirdRolling] = useState(true);
  const onStop = (index: number) => {
    index === 0 && setIsFirstRolling(false);
    index === 1 && setIsSecondRolling(false);
    index === 2 && setIsThirdRolling(false);
  };
  const onRun = (index: number) => {
    index === 0 && setIsFirstRolling(true);
    index === 1 && setIsSecondRolling(true);
    index === 2 && setIsThirdRolling(true);
  };

  const { data } = useSuspenseQuery({
    queryKey: ['recommended-brands'],
    queryFn: () => getPartnershipBrand(),
  });

  const rolledData =
    data.data?.length > 10 ? data.data : data.data.concat(data.data);

  const handleBrandClick = (_: React.MouseEvent, brandName: string) => {
    setIsModalOpen(true);
    setCurrentBrandName(brandName);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box>
        <RollingBanner
          rolledData={rolledData}
          index={0}
          isRunning={isFirstRolling}
          handleStop={onStop}
          handleRun={onRun}
          isDownMedium={isDownMedium}
          handleBrandClick={handleBrandClick}
        />
        <RollingBanner
          rolledData={rolledData}
          index={1}
          isRunning={isSecondRolling}
          handleStop={onStop}
          handleRun={onRun}
          isDownMedium={isDownMedium}
          handleBrandClick={handleBrandClick}
        />
        <RollingBanner
          rolledData={rolledData}
          index={2}
          isRunning={isThirdRolling}
          handleStop={onStop}
          handleRun={onRun}
          isDownMedium={isDownMedium}
          handleBrandClick={handleBrandClick}
        />
      </Box>
      {/* 후에 추천 브랜드 섹션의 재사용이 있을 수 있으므로 Modal을 별도로 두었음. */}
      <ConsultingModal
        open={isModalOpen}
        onClose={onModalClose}
        initialValue={{ additional: `${currentBrandName} 창업 문의` }}
      />
    </>
  );
};

export default RecommendedBrands;
