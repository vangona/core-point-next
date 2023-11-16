'use client';

import { useGetStore } from '@/api/store/useGetStore';
import StoreResult from '@/components/store/StoreResult';
import StoreSearch from '@/components/store/StoreSearch';

export default function StorePage() {
  const query = useGetStore();

  return (
    <>
      <StoreSearch />
      <StoreResult storeData={query.data?.data} />
    </>
  );
}
