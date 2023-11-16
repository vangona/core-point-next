'use client';

import { Suspense } from 'react';
import StorePagination from '@/components/store/StorePagination';
import StoreResult from '@/components/store/StoreResult';
import StoreResultLayout from '@/components/store/StoreResultLayout';
import StoreResultLoading from '@/components/store/StoreResultLoading';
import StoreSearch from '@/components/store/StoreSearch';

export default function StorePage() {
  return (
    <>
      <StoreSearch />
      <StoreResultLayout>
        <Suspense fallback={<StoreResultLoading />}>
          <StoreResult />
          <StorePagination />
        </Suspense>
      </StoreResultLayout>
    </>
  );
}
