import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';
import { Store } from '@/api/store';

interface GetStoreRequest {
  page?: string;
  limit?: string;
  category?: string;
}

export interface GetStoreResponse {
  data: Store[];
}

export const getStore = async ({
  page = '1',
  limit = '20',
  category,
}: GetStoreRequest): Promise<GetStoreResponse> => {
  const reqUrl = new URL('/api/store', process.env.NEXT_PUBLIC_BASE_URL);
  const parsedPage = String(parseInt(page) - 1);
  reqUrl.searchParams.set('page', parsedPage);
  reqUrl.searchParams.set('limit', limit);
  category && reqUrl.searchParams.set('category', category);

  const res = await fetch(reqUrl);
  const body = await res.json();
  return Promise.resolve(body);
};

interface useGetStoreProps {
  page?: string;
  limit?: string;
  category?: string;
}
export const useGetStore = ({ page, limit, category }: useGetStoreProps) => {
  const queryKey: QueryKey = ['store', page, limit, category];
  const query = useSuspenseQuery({
    queryKey,
    queryFn: () => getStore({ page, limit, category }),
  });

  return query;
};
