import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import { Store } from '@/api/store';
import { ConsultingModal } from '@/components/common/consulting-modal';
import { CostDetailSection } from '@/components/store-detail/cost-detail';
import { DescriptionSection } from '@/components/store-detail/description';
import StoreDetailPieChart from '@/components/store-detail/pie-chart/StoreDetailPieChart';
import StoreDetailWindow from '@/components/store-detail/pie-chart/StoreDetailWindow';
import { SalesDetailSection } from '@/components/store-detail/sales-detail';
import { OverviewSection } from '../overview';
import type { SxProps } from '@mui/material';

const ImageSection = dynamic(
  () => import('@/components/store-detail/image-section/ImageSection'),
  { loading: () => <Skeleton width='300px' height='500px' /> },
);
const LocalStoreSection = dynamic(
  () => import('@/components/store-detail/local-store/LocalStoreSection'),
  { loading: () => <Skeleton width='100%' height='300px' /> },
);

interface StoreDetailContentProps {
  isLoading?: boolean;
  storeDetailData?: Store;
  parsedExpenditureData: [string, number][];
}
const StoreDetailContent = ({
  isLoading,
  storeDetailData,
  parsedExpenditureData,
}: StoreDetailContentProps) => {
  const theme = useTheme();
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerSx: SxProps = isDownLarge
    ? {
        width: '100%',
        px: isDownMedium ? 1 : 3,
      }
    : {};

  return (
    <Box sx={containerSx}>
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          flexDirection: isDownMedium ? 'column' : 'row',
          gap: isDownMedium ? 5 : 8,
          alignItems: 'center',
        }}
      >
        <ImageSection
          imgSrcArr={
            storeDetailData?.store_img_src_arr
              ? storeDetailData?.store_img_src_arr
              : [undefined]
          }
        />
        {!isDownLarge && (
          <SalesDetailSection storeDetailData={storeDetailData} />
        )}
        {isDownLarge && <OverviewSection storeDetailData={storeDetailData} />}
      </Box>
      {isDownLarge && (
        <Box sx={{ mt: 5 }}>
          <SalesDetailSection fullWidth storeDetailData={storeDetailData} />
        </Box>
      )}
      <Box sx={{ mt: 5, display: 'flex', gap: 5 }}>
        <Box sx={{ width: isDownLarge ? '100%' : '750px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Box sx={{ width: '100%' }}>
              <Typography variant='h5' fontWeight='bold'>
                월 지출 세부내역
              </Typography>
              <Divider sx={{ my: 2 }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: isDownMedium ? 'column-reverse' : 'row',
                justifyContent: 'space-between',
                gap: 5,
              }}
            >
              <CostDetailSection
                storeDetailData={storeDetailData}
                parsedExpenditureData={parsedExpenditureData}
              />
              {parsedExpenditureData.length > 0 && (
                <StoreDetailPieChart
                  parsedExpenditureData={parsedExpenditureData}
                />
              )}
            </Box>
          </Box>
          {(storeDetailData?.description ||
            storeDetailData?.mobile_description ||
            storeDetailData?.store_tags) && (
            <DescriptionSection storeDetailData={storeDetailData} />
          )}
          {isDownLarge && (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                mt: 3,
              }}
            >
              <Button
                sx={{ width: '300px', mt: 4 }}
                variant='contained'
                onClick={() => setIsModalOpen(true)}
              >
                상담 신청하기
              </Button>
              <ConsultingModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialValue={{
                  location: storeDetailData?.store_location,
                  category: storeDetailData?.store_category,
                  additional: `[ 매물번호 ${storeDetailData?.store_number} ] '${storeDetailData?.store_name}' 관련 문의`,
                }}
              />
            </Box>
          )}
        </Box>
        {!isDownLarge && (
          <StoreDetailWindow storeDetailData={storeDetailData} />
        )}
      </Box>
      <LocalStoreSection storeDetailData={storeDetailData} />
    </Box>
  );
};

export default StoreDetailContent;
