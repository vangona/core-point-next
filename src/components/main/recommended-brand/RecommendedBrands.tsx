import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { getPartnershipBrand } from '@/api/partnership/getPartnershipBrands';
import { ConsultingModal } from '@/components/common/consulting-modal';

const MEDIUM_LOGO_SIZE = '100px';
const SMALL_LOGO_SIZE = '50px';

const RecommendedBrands = () => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBrandName, setCurrentBrandName] = useState('');
  const { data } = useSuspenseQuery({
    queryKey: ['recommended-brands'],
    queryFn: () => getPartnershipBrand(),
  });

  const handleBrandClick = (_: React.MouseEvent, brandName: string) => {
    setIsModalOpen(true);
    setCurrentBrandName(brandName);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {data.data?.map((brand, index) => (
        <Tooltip title={brand.brand_name} key={'recommended-brand-' + index}>
          <Box
            sx={{
              position: 'relative',
              width: isDownMedium ? SMALL_LOGO_SIZE : MEDIUM_LOGO_SIZE,
              height: isDownMedium ? SMALL_LOGO_SIZE : MEDIUM_LOGO_SIZE,
              '&:hover': { cursor: 'pointer' },
            }}
            onClick={(e) => handleBrandClick(e, brand.brand_name)}
          >
            <Image src={brand.brand_img_src} alt={brand.brand_name} fill />
          </Box>
        </Tooltip>
      ))}
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
