import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';
import { CostDetail, Store } from '@/api/store';

interface GetStoreDetailRequest {
  id?: string;
}

export interface GetStoreDetailResponse {
  data?: (Store & { cost_details: CostDetail[] })[];
}

const getStoreDetail = async ({
  id,
}: GetStoreDetailRequest): Promise<GetStoreDetailResponse> => {
  if (!id) throw Error('상세정보를 가져올 id가 없습니다.');

  const reqUrl = new URL('/api/store/detail', process.env.NEXT_PUBLIC_BASE_URL);
  reqUrl.searchParams.set('id', id);

  const res = await fetch(reqUrl);
  const body = await res.json();
  return Promise.resolve(body);
};

interface useGetStoreDetailProps {
  id: string;
}
export const useGetStoreDetail = ({ id }: useGetStoreDetailProps) => {
  const queryKey: QueryKey = ['store-detail', id];
  const query = useSuspenseQuery({
    queryKey,
    queryFn: () => getStoreDetail({ id }),
    select: (data) => ({
      storeData: data.data ? data.data[0] : undefined,
      costDetail:
        data.data && data.data[0].cost_details
          ? data.data[0].cost_details[0]
          : undefined,
    }),
  });

  return query;
};
