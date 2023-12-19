import React from 'react';
import Marquee from 'react-fast-marquee';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { PartnershipBrand } from '@/app/api/supabase';

const MEDIUM_LOGO_SIZE = 30;
const SMALL_LOGO_SIZE = 25;

interface RollingBannerProps {
  rolledData?: PartnershipBrand[];
  index: number;
  handleBrandClick: (event: React.MouseEvent, brandName: string) => void;
  isDownMedium: boolean;
}
const RollingBanner = ({
  rolledData,
  index,
  isDownMedium,
  handleBrandClick,
}: RollingBannerProps) => {
  return (
    <Box sx={{ width: '80vw' }}>
      <Marquee
        autoFill
        pauseOnHover
        gradient
        speed={30}
        direction={index % 2 === 0 ? 'left' : 'right'}
      >
        <Box
          sx={{
            marginLeft: 5,
            display: 'flex',
            gap: 5,
          }}
        >
          {rolledData?.map((brand, index) => (
            <Tooltip
              title={brand.brand_name}
              key={'recommended-brand-' + index}
            >
              <Box
                sx={{
                  position: 'relative',
                  '& img': {
                    transition: '100ms all linear',
                  },
                  '&:hover': {
                    cursor: 'pointer',
                    '& img': { transform: 'scale(1.2)' },
                  },
                }}
                onClick={(e) => handleBrandClick(e, brand.brand_name)}
              >
                {/* 로고의 용량이 작고 롤링 배너이기 때문에 next/image 대신 img 태그를 사용해도 괜찮다고 판단함. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.brand_img_src}
                  alt={brand.brand_name}
                  style={{
                    height: isDownMedium ? SMALL_LOGO_SIZE : MEDIUM_LOGO_SIZE,
                    width: 'auto',
                  }}
                />
              </Box>
            </Tooltip>
          ))}
        </Box>
      </Marquee>
    </Box>
  );
};

export default RollingBanner;
