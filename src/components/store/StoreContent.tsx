'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { StoreSearchParams } from '@/app/store/page';
import {
  LARGE_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import StorePagination from '@/components/store/StorePagination';
import StoreResult from '@/components/store/StoreResult';
import StoreResultLayout from '@/components/store/StoreResultLayout';
import StoreSearch from '@/components/store/StoreSearch';
import type { SxProps } from '@mui/material';

interface StoreContentProps {
  searchParams: StoreSearchParams;
}
export default function StoreContent({ searchParams }: StoreContentProps) {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    LARGE_LAYOUT_WIDTH,
  );

  const smallContainerSx: SxProps = isDownLarge
    ? {
        py: 2,
        px: 5,
      }
    : {};

  useEffect(() => {
    if (isDownLarge) {
      setLayoutWidth(SMALL_LAYOUT_WIDTH);
      return;
    }

    if (isUpLarge) {
      setLayoutWidth(LARGE_LAYOUT_WIDTH);
      return;
    }
  }, [isDownLarge, isUpLarge]);

  return (
    <Box sx={{ width: layoutWidth, ...smallContainerSx }}>
      <StoreSearch />
      <StoreResultLayout>
        <StoreResult searchParams={searchParams} />
        <StorePagination />
      </StoreResultLayout>
    </Box>
  );
}
