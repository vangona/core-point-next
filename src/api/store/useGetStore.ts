import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { Store, CostDetail } from '@/api/store';

interface GetStoreRequest {
  page: string;
  limit: string;
}

export interface GetStoreResponse {
  data: Store[];
  cost_details: CostDetail[];
}

const getStore = async ({
  page,
  limit,
}: GetStoreRequest): Promise<GetStoreResponse> => {
  const reqUrl = new URL('/api/store', process.env.NEXT_PUBLIC_BASE_URL);
  const parsedPage = String(parseInt(page) - 1);
  reqUrl.searchParams.set('page', parsedPage);
  reqUrl.searchParams.set('limit', limit);

  const res = await fetch(reqUrl);
  const body = await res.json();
  return Promise.resolve(body);
};

export const useGetStore = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limt') ?? '20';
  const queryKey: QueryKey = ['store', page, limit];
  const query = useSuspenseQuery({
    queryKey,
    queryFn: () => getStore({ page, limit }),
  });

  return query;
};
