'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/navigation';
import { useGetStore } from '@/api/store';
import { StoreSearchParams } from '@/app/store/page';

interface StorePaginationProps {
  searchParams: StoreSearchParams;
}
const StorePagination = ({ searchParams }: StorePaginationProps) => {
  const router = useRouter();
  const { data } = useGetStore(searchParams);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const handlePageChange = (page: number) => {
    const url = new URL(
      process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.core-point.kr',
    );
    url.pathname = 'store';

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', page.toString());
    url.search = newSearchParams.toString();

    router.push(url.toString());
  };

  useEffect(() => {
    setPageCount(Math.ceil(data?.count ?? 0 / 20));
    setPage(parseInt(searchParams.page ?? '1'));
  }, [data?.count, searchParams]);

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
