'use client';

import { useEffect, useState } from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useMediaQuery, useTheme } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
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
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    LARGE_LAYOUT_WIDTH,
  );

  const smallContainerSx: SxProps = isDownLarge
    ? {
        py: 2,
        px: 3,
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
      {!isDownMedium && <StoreSearch />}
      {isDownMedium && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            매물 검색하기
          </AccordionSummary>
          <AccordionDetails>
            <StoreSearch />
          </AccordionDetails>
        </Accordion>
      )}
      <StoreResultLayout>
        <StoreResult searchParams={searchParams} />
        <StorePagination searchParams={searchParams} />
      </StoreResultLayout>
    </Box>
  );
}
