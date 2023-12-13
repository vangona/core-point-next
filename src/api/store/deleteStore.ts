import { StoresColumn } from '@/app/api/types';

export interface DeleteStoreBody {
  [StoresColumn.STORE_ID]: string;
}

export const deleteStore = async (reqBody: DeleteStoreBody) => {
  const reqUrl = new URL('/api/store', process.env.NEXT_PUBLIC_BASE_URL);

  const res = await fetch(reqUrl, {
    method: 'DELETE',
    body: JSON.stringify(reqBody),
  });
  const body = await res.json();
  return Promise.resolve(body);
};
