import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Store } from '@/api/store';
import { DIMMED_GRAY } from '@/constants/color';

interface DescriptionSectionProps {
  storeDetailData?: Store;
}
const DescriptionSection = ({ storeDetailData }: DescriptionSectionProps) => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Box>
          <Typography variant='h5' fontWeight='bold' sx={{ mt: 6 }}>
            상세 설명
          </Typography>
          <Divider sx={{ my: 2 }} />
        </Box>
        <Box
          sx={{
            maxWidth: '100%',
            width: '700px',
            minHeight: '300px',
            padding: 3,
            backgroundColor: DIMMED_GRAY,
            whiteSpace: 'pre-wrap',
          }}
        >
          {isDownMedium && storeDetailData?.mobile_description
            ? storeDetailData.mobile_description
            : storeDetailData?.description}

          {storeDetailData?.store_tags && (
            <Box sx={{ marginTop: 2 }}>
              {storeDetailData?.store_tags?.map((tag, index) => (
                <span key={'store-detail-tag-' + index}>#{tag} </span>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default DescriptionSection;
