'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Link,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useGetStoreMinimum } from '@/api/store/useGetStoreMinimum';
import { LOCALSTORAGE_RECENT_STORE_KEY } from '@/app/store/[id]/constants';

const StoreWindow = () => {
  const router = useRouter();
  const [recentStores, setRecentStores] = useState<string[]>([]);
  const { data, isLoading } = useGetStoreMinimum({ idArr: recentStores });

  useEffect(() => {
    const localStorageRecentStores = localStorage.getItem(
      LOCALSTORAGE_RECENT_STORE_KEY,
    );
    const parsedRecentStores: string[] = localStorageRecentStores
      ? JSON.parse(localStorageRecentStores)
      : [];
    setRecentStores(parsedRecentStores);
  }, []);

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
    >
      <Typography
        variant='subtitle1'
        fontWeight='bold'
        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
      >
        최근 조회한 매물
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {isLoading && <CircularProgress />}
        {!isLoading && data.data && data.data.length > 0
          ? data.data.map((storeData, index) => (
              <Box key={'recent-store' + storeData.store_id + index}>
                <Link
                  onClick={() => router.push(`/store/${storeData.store_id}`)}
                >
                  {storeData.store_name}
                </Link>
              </Box>
            ))
          : '최근 조회한 매물이 없습니다.'}
      </Box>
      <Button size='large' variant='contained'>
        상담 신청하기
      </Button>
    </Card>
  );
};

export default StoreWindow;
