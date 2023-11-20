'use client';

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
      <StoreSearch />
      <StoreResultLayout>
        <StoreResult searchParams={searchParams} />
        <StorePagination />
      </StoreResultLayout>
    </>
  );
}
