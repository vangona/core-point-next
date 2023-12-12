import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Store } from '@/api/store';
import { DIMMED_GRAY } from '@/constants/color';

interface DescriptionSectionProps {
  storeDetailData?: Store;
}
const DescriptionSection = ({ storeDetailData }: DescriptionSectionProps) => {
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
          {storeDetailData?.description}
        </Box>
      </Box>
    </>
  );
};

export default DescriptionSection;
