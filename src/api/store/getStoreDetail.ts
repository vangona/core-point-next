import { Store } from '@/api/store';

interface GetStoreDetailRequest {
  id?: string;
}

export interface GetStoreDetailResponse {
  data?: Store[];
}

export const getStoreDetail = async ({
  id,
}: GetStoreDetailRequest): Promise<GetStoreDetailResponse> => {
  if (!id) throw Error('상세정보를 가져올 id가 없습니다.');

  const reqUrl = new URL('/api/store/detail', process.env.NEXT_PUBLIC_BASE_URL);
  reqUrl.searchParams.set('id', id);

  const res = await fetch(reqUrl);
  const body = await res.json();
  return Promise.resolve(body);
};
