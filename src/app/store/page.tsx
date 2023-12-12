import GeneralHero from '@/components/layout/general-layout/GeneralHero';
import StoreContent from '@/components/store/StoreContent';

export type StoreSearchParams = {
  page?: string;
  limit?: string;
  category?: string;
  budget?: string;
  location?: string;
  search?: string;
};

interface StorePageProps {
  searchParams: StoreSearchParams;
}

export default function StorePage({ searchParams }: StorePageProps) {
  return (
    <>
      <GeneralHero
        title='매물 정보'
        description='코어창업이 선별한 창업 매물들'
        imgSrc='/store-hero.webp'
      />
      <StoreContent searchParams={searchParams} />
    </>
  );
}
