import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';

export interface GetStoreMetadataResponse {
  data: number;
}

const getStoreMetadata = async (): Promise<GetStoreMetadataResponse> => {
  const reqUrl = new URL('/api/store/metadata', 'http://localhost:3000');

  const res = await fetch(reqUrl);
  const body = await res.json();
  return Promise.resolve(body);
};

export const useGetStoreMetadata = () => {
  const queryKey: QueryKey = ['store-metadata'];
  const query = useSuspenseQuery({
    queryKey,
    queryFn: () => getStoreMetadata(),
  });

  return query;
};
