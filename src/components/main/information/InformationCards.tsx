import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { useSuspenseQuery } from '@tanstack/react-query';
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

  const { data, refetch } = useSuspenseQuery({
    queryKey: ['main-opening-information', page, limit],
    queryFn: () => getOpeningInformation({ page, limit }),
  });

  const pageCount = Math.ceil(data.count / limit);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (isDownSmall) {
      setLimit(SMALL_LIMIT);
      setGridSize(SMALL_GRID_SIZE);
      return;
    }

    setGridSize(LARGE_GRID_SIZE);

    if (isDownLarge) {
      setLimit(MEDIUM_LIMIT);
      return;
    }

    if (isUpLarge) {
      setLimit(LARGE_LIMIT);
      return;
    }
  }, [isUpLarge, isDownLarge, isDownMedium, isDownSmall, data.count]);

  useEffect(() => {
    refetch();
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
        {data.data.map((data, index) => {
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
        onChange={(_, page) => handlePageChange(page)}
      />
    </Box>
  );
};

export default InformationCards;
