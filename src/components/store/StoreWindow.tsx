'use client';

import { Box, Button, Card, Link, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { LOCALSTORAGE_RECENT_STORE_KEY } from '@/app/store/[id]/constants';
import { dummyStoreDetail } from '@/app/store/dummyStore';
import { CorePointRoutes } from '@/constants/routes';

const StoreWindow = () => {
  const router = useRouter();
  const recentStores = localStorage.getItem(LOCALSTORAGE_RECENT_STORE_KEY);
  const parsedRecentStores: string[] = recentStores
    ? JSON.parse(recentStores)
    : [];

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
        {parsedRecentStores
          ? parsedRecentStores.map((storeId, index) => {
              const dummyDetail = dummyStoreDetail.find(
                (store) => store.storeData.storeId === storeId,
              );
              return (
                <Link
                  key={'recent-store' + index}
                  onClick={() =>
                    router.push(CorePointRoutes.STORE + '/' + storeId)
                  }
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                >
                  {dummyDetail?.storeData.storeName}
                </Link>
              );
            })
          : '최근 조회한 매물이 없습니다.'}
      </Box>
      <Button size='large' variant='contained'>
        상담 신청하기
      </Button>
    </Card>
  );
};

export default StoreWindow;
