import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

interface GetStoreRequest {
  page: string;
  limit: string;
}

export interface Store {
  store_id: string;
  store_name: string;
  store_location: string;
  store_size: string;
  store_category: string;
  store_cost: number;
  monthly_sales: number;
  monthly_revenue: number;
  monthly_cost: number;
  manager: string;
  manager_contact: string;
  created_at: string;
  updated_at: string;
  deleted: string;
  sales_reason: string;
  store_size_m2?: string;
  store_img_src_arr?: string[];
}

export interface GetStoreResponse {
  data: Store[];
}

const getStore = async ({
  page,
  limit,
}: GetStoreRequest): Promise<GetStoreResponse> => {
  const reqUrl = new URL('/api/store', 'http://localhost:3000');
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
