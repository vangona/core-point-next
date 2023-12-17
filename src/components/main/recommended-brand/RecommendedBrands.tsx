import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getPartnershipBrand } from '@/api/partnership/getPartnershipBrands';
import { ConsultingModal } from '@/components/common/consulting-modal';
import RollingBanner from './RollingBanner';

const RecommendedBrands = () => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBrandName, setCurrentBrandName] = useState('');

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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <RollingBanner
          rolledData={rolledData}
          index={0}
          isDownMedium={isDownMedium}
          handleBrandClick={handleBrandClick}
        />
        <RollingBanner
          rolledData={rolledData}
          index={1}
          isDownMedium={isDownMedium}
          handleBrandClick={handleBrandClick}
        />
        <RollingBanner
          rolledData={rolledData}
          index={2}
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
