import { QueryKey, useQuery } from '@tanstack/react-query';

export interface GetStoreMetadataResponse {
  data: number;
}

const getStoreMetadata = async (): Promise<GetStoreMetadataResponse> => {
  const reqUrl = new URL(
    '/api/store/metadata',
    process.env.NEXT_PUBLIC_BASE_URL,
  );

  const res = await fetch(reqUrl);
  const body = await res.json();
  return Promise.resolve(body);
};

export const useGetStoreMetadata = () => {
  const queryKey: QueryKey = ['store-metadata'];
  const query = useQuery({
    queryKey,
    queryFn: () => getStoreMetadata(),
  });

  return query;
};
