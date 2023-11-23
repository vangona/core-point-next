import GeneralHero from '@/components/layout/general-layout/GeneralHero';
import StoreContent from '@/components/store/StoreContent';

export interface StoreSearchParams {
  page?: string;
  limit?: string;
  category?: string;
  budget?: string;
  location?: string;
  search?: string;
}

interface StorePageProps {
  searchParams: StoreSearchParams;
}

export default function StorePage({ searchParams }: StorePageProps) {
  return (
    <>
      <GeneralHero title='매물 정보' />
      <StoreContent searchParams={searchParams} />
    </>
  );
}
