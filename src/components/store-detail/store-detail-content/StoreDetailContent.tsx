import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Store } from '@/api/store';
import { CostDetailSection } from '@/components/store-detail/cost-detail';
import { DescriptionSection } from '@/components/store-detail/description';
import { ImageSection } from '@/components/store-detail/image-section';
import { LocalStoreSection } from '@/components/store-detail/local-store';
import StoreDetailPieChart from '@/components/store-detail/pie-chart/StoreDetailPieChart';
import StoreDetailWindow from '@/components/store-detail/pie-chart/StoreDetailWindow';
import { SalesDetailSection } from '@/components/store-detail/sales-detail';
import { OverviewSection } from '../overview';
import type { SxProps } from '@mui/material';

interface StoreDetailContentProps {
  storeDetailData?: Store;
  parsedExpenditureData: [string, number][];
}
const StoreDetailContent = ({
  storeDetailData,
  parsedExpenditureData,
}: StoreDetailContentProps) => {
  const theme = useTheme();
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));

  const containerSx: SxProps = isDownLarge
    ? {
        px: 3,
      }
    : {};

  return (
    <Box sx={containerSx}>
      <Box sx={{ mt: 3, display: 'flex', gap: 8 }}>
        <ImageSection imgSrcArr={storeDetailData?.store_img_src_arr} />
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
                지출 세부내역
              </Typography>
              <Divider sx={{ my: 2 }} />
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}
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
          {storeDetailData?.description && <DescriptionSection />}
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
