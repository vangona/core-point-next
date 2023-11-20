import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';
import { Store } from '@/api/store';
import { StoreSearchParams } from '@/app/store/page';

export interface GetStoreResponse {
  data: Store[];
}

export const getStore = async (
  searchParams: StoreSearchParams,
): Promise<GetStoreResponse> => {
  const {
    page = '1',
    limit = '20',
    category,
    budget,
    location,
    search,
  } = searchParams;

  const reqUrl = new URL('/api/store', process.env.NEXT_PUBLIC_BASE_URL);
  const parsedPage = String(parseInt(page) - 1);

  reqUrl.searchParams.set('page', parsedPage);
  reqUrl.searchParams.set('limit', limit);
  category && reqUrl.searchParams.set('category', category);
  budget && reqUrl.searchParams.set('budget', budget);
  location && reqUrl.searchParams.set('location', location);
  search && reqUrl.searchParams.set('search', search);

  const res = await fetch(reqUrl);
  const body = await res.json();
  return Promise.resolve(body);
};

export const useGetStore = (searchParams: StoreSearchParams) => {
  const queryKey: QueryKey = ['store', searchParams];
  const query = useSuspenseQuery({
    queryKey,
    queryFn: () => getStore(searchParams),
  });

  return query;
};
