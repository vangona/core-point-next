import React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { PartnershipBrand } from '@/app/api/supabase';
import '@/styles/rolling-banner.css';

const MEDIUM_LOGO_SIZE = 30;
const SMALL_LOGO_SIZE = 25;

interface RollingBannerProps {
  rolledData: PartnershipBrand[];
  index: number;
  isRunning: boolean;
  handleStop: (index: number) => void;
  handleRun: (index: number) => void;
  handleBrandClick: (event: React.MouseEvent, brandName: string) => void;
  isDownMedium: boolean;
}
const RollingBanner = ({
  rolledData,
  index,
  isRunning,
  handleStop,
  handleRun,
  isDownMedium,
  handleBrandClick,
}: RollingBannerProps) => {
  return (
    <Box className='slide_container'>
      <Box
        className='slide_wrapper'
        onMouseEnter={() => handleStop(index)}
        onMouseLeave={() => handleRun(index)}
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <Box
          className='slide origin'
          sx={{
            animation: '60s linear infinite normal none',
            animationName:
              index % 2 === 0
                ? 'infiniteAnimation1'
                : 'reverseInfiniteAnimation1',
            animationPlayState: isRunning ? 'running' : 'paused',
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
        <Box
          className='slide clone'
          sx={{
            animation: '60s linear infinite normal none',
            animationName:
              index % 2 === 0
                ? 'infiniteAnimation2'
                : 'reverseInfiniteAnimation2',
            animationPlayState: isRunning ? 'running' : 'paused',
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
      </Box>
    </Box>
  );
};

export default RollingBanner;
