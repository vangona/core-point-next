'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getOpeningInformation } from '@/api/opening-information';
import InformationCard from './InformationCard';

const LARGE_GRID_SIZE = '200px';
const SMALL_GRID_SIZE = '150px';

const LARGE_LIMIT = 10;
const MEDIUM_LIMIT = 6;
const SMALL_LIMIT = 4;

const InformationCards = () => {
  const theme = useTheme();
  const [limit, setLimit] = useState(LARGE_LIMIT);
  const [page, setPage] = useState(1);
  const [gridSize, setGridSize] = useState(LARGE_GRID_SIZE);
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isDownSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [pageCount, setPageCount] = useState(1);

  const { data, refetch } = useQuery({
    queryKey: ['main-opening-information', page, limit],
    queryFn: () => getOpeningInformation({ page, limit }),
    placeholderData: keepPreviousData,
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (isDownSmall) {
      setLimit(SMALL_LIMIT);
      setGridSize(SMALL_GRID_SIZE);

      if (!data?.count) return;
      const caculatedCount = Math.ceil(data.count / SMALL_LIMIT) || 1;
      caculatedCount < pageCount && setPage(caculatedCount);
      setPageCount(caculatedCount);

      return;
    }

    setGridSize(LARGE_GRID_SIZE);

    if (isDownLarge) {
      setLimit(MEDIUM_LIMIT);

      if (!data?.count) return;
      const caculatedCount = Math.ceil(data.count / MEDIUM_LIMIT) || 1;
      caculatedCount < pageCount && setPage(caculatedCount);
      setPageCount(caculatedCount);

      return;
    }

    if (isUpLarge) {
      setLimit(LARGE_LIMIT);

      if (!data?.count) return;
      const caculatedCount = Math.ceil(data.count / LARGE_LIMIT) || 1;
      caculatedCount < pageCount && setPage(caculatedCount);
      setPageCount(caculatedCount);

      return;
    }
  }, [
    isUpLarge,
    isDownLarge,
    isDownMedium,
    isDownSmall,
    data?.count,
    pageCount,
  ]);

  useEffect(() => {
    refetch();
    // 여긴 limit 때 refetch가 맞음. refetch는 함수라서 의존성 배열에 추가하면 일날 수 있음.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          margin: 5,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, ${gridSize})`,
          columnGap: 2,
          justifyContent: 'center',
          placeItems: 'center',
        }}
      >
        {data?.data.map((data, index) => {
          if (data.url && data.title && data.imgSrc) {
            return (
              <InformationCard
                key={'information-card-' + data.title + index}
                informationData={data}
                isSmall={isDownSmall}
              />
            );
          } else {
            return undefined;
          }
        })}
      </Box>
      <Pagination
        count={pageCount}
        page={page}
        onChange={(_, page) => handlePageChange(page)}
        size={isDownSmall ? 'small' : 'medium'}
      />
    </Box>
  );
};

export default InformationCards;
