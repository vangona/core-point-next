'use client';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { Store } from '@/api/store';
import { ParagraphDivider } from '@/components/common/paragraph-divider';

interface TitleSectionProps {
  storeDetailData?: Store;
}
const TitleSection = ({ storeDetailData }: TitleSectionProps) => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: isDownMedium ? 5 : 8,
          mb: isDownMedium ? 2 : 3,
        }}
      >
        {storeDetailData ? (
          <>
            <Typography
              variant={isDownMedium ? 'h6' : 'h4'}
              component='h4'
              fontWeight='bold'
              align='center'
            >
              [ 매물번호 {storeDetailData?.store_number} ]
            </Typography>{' '}
            <Typography
              variant={isDownMedium ? 'h6' : 'h4'}
              component='h4'
              fontWeight='bold'
              align='center'
            >
              {storeDetailData?.store_name}
            </Typography>
          </>
        ) : (
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            lineHeight='100%'
          >
            <Skeleton component='h4' variant='text' height='5rem' width='60%' />
            <Skeleton component='h4' variant='text' height='5rem' width='80%' />
          </Box>
        )}
      </Box>
      <ParagraphDivider />
    </>
  );
};

export default TitleSection;
