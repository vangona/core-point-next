'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGetStoreMetadata } from '@/api/store/useGetStoreMetadata';

const StorePagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data } = useGetStoreMetadata();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const handlePageChange = (page: number) => {
    router.push(`/store?page=${page}`);
  };

  useEffect(() => {
    setPageCount(Math.ceil(data.data / 20));
    setPage(parseInt(searchParams.get('page') ?? '1'));
  }, [data.data, searchParams]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
      }}
    >
      <Pagination
        page={page}
        count={pageCount}
        size='large'
        color='primary'
        onChange={(_, page) => handlePageChange(page)}
      />
    </Box>
  );
};

export default StorePagination;
