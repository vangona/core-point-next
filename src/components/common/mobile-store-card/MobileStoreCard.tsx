import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { StoreCardProps } from '../store-card/StoreCard';

const MobileStoreCard = ({ storeData, sx }: StoreCardProps) => {
  return (
    <Box sx={{ ...sx }}>
      <Typography>{storeData?.store_name}</Typography>
      <Divider />
    </Box>
  );
};

export default MobileStoreCard;
