import { Store } from '@/api/store/types';

export interface GetNewStoreResponse {
  data: Store[];
}

export const getNewStore = async (): Promise<GetNewStoreResponse> => {
  const reqUrl = new URL('/api/store/new', process.env.NEXT_PUBLIC_BASE_URL);

  const res = await fetch(reqUrl);
  const body = await res.json();
  return Promise.resolve(body);
};
