import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { getPartnershipBrand } from '@/api/partnership/getPartnershipBrands';
import { ConsultingModal } from '@/components/common/consulting-modal';

const RecommendedBrands = () => {
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
        <Box
          key={'recommended-brand-' + index}
          sx={{
            position: 'relative',
            width: '100px',
            height: '100px',
            '&:hover': { cursor: 'pointer' },
          }}
          onClick={(e) => handleBrandClick(e, brand.brand_name)}
        >
          <Image src={brand.brand_img_src} alt={brand.brand_name} fill />
        </Box>
      ))}
      <ConsultingModal
        open={isModalOpen}
        onClose={onModalClose}
        initialValue={{ additional: `${currentBrandName} 창업 문의` }}
      />
    </>
  );
};

export default RecommendedBrands;
