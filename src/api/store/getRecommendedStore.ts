import { Store } from '@/api/store/types';

export interface GetRecommendedStoreResponse {
  data: Store[];
}

export const getRecommendedStore =
  async (): Promise<GetRecommendedStoreResponse> => {
    const reqUrl = new URL(
      '/api/store/recommended',
      process.env.NEXT_PUBLIC_BASE_URL,
    );

    const res = await fetch(reqUrl);
    const body = await res.json();
    return Promise.resolve(body);
  };
