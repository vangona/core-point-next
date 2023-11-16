import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';

interface GetStoreMinimumRequest {
  idArr?: string[];
}

export interface GetStoreMinimumResponse {
  data?: {
    store_id: string;
    store_name: string;
    store_cost: string;
    monthly_sales: string;
  }[];
}

const getStoreMinimum = async ({
  idArr,
}: GetStoreMinimumRequest): Promise<GetStoreMinimumResponse> => {
  if (!idArr) throw Error('가져올 id 배열이 없습니다.');

  const reqUrl = new URL(
    '/api/store/minimum',
    process.env.NEXT_PUBLIC_BASE_URL,
  );
  idArr?.map((id) => reqUrl.searchParams.append('id', id));

  const res = await fetch(reqUrl);
  const body = await res.json();
  return Promise.resolve(body);
};

interface useGetStoreMinimumProps {
  idArr: string[];
}
export const useGetStoreMinimum = ({ idArr }: useGetStoreMinimumProps) => {
  const queryKey: QueryKey = ['store-detail', idArr];
  const query = useSuspenseQuery({
    queryKey,
    queryFn: () => getStoreMinimum({ idArr }),
  });

  return query;
};
