'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { StoreMinimum } from '@/api/store/getStoreMinimum';

interface StoreWindowProps {
  storeData?: StoreMinimum[];
  isLoading?: boolean;
}
const StoreWindow = ({ storeData, isLoading }: StoreWindowProps) => {
  const router = useRouter();
  const isEmptyData = !storeData || storeData.length === 0;

  return (
    <Card
      sx={{
        position: 'sticky',
        top: 24,
        width: 268,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        gap: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
      }}
      variant='elevation'
      raised
    >
      <Typography
        variant='subtitle1'
        fontWeight='bold'
        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
      >
        최근 조회한 매물
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {isLoading && <Skeleton variant='text' height='50px' />}
        {!isLoading &&
          !isEmptyData &&
          storeData.map((storeData, index) => (
            <Box key={'recent-store' + storeData.store_id + index}>
              <Link onClick={() => router.push(`/store/${storeData.store_id}`)}>
                {storeData.store_name}
              </Link>
            </Box>
          ))}
        {!isLoading && isEmptyData && '최근 조회한 매물이 없습니다.'}
      </Box>
      <Button size='large' variant='contained'>
        상담 신청하기
      </Button>
    </Card>
  );
};

export default StoreWindow;
