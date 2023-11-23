'use client';

import Box from '@mui/material/Box';
import { LARGE_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import GeneralHero from '@/components/layout/general-layout/GeneralHero';
import StorePagination from '@/components/store/StorePagination';
import StoreResult from '@/components/store/StoreResult';
import StoreResultLayout from '@/components/store/StoreResultLayout';
import StoreSearch from '@/components/store/StoreSearch';

export interface StoreSearchParams {
  page?: string;
  limit?: string;
  category?: string;
  budget?: string;
  location?: string;
  search?: string;
}
export default function StorePage({
  searchParams,
}: {
  searchParams: StoreSearchParams;
}) {
  return (
    <>
      <GeneralHero title='매물 정보' />
      <Box sx={{ width: LARGE_LAYOUT_WIDTH }}>
        <StoreSearch />
        <StoreResultLayout>
          <StoreResult searchParams={searchParams} />
          <StorePagination />
        </StoreResultLayout>
      </Box>
    </>
  );
}
