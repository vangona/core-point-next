export interface PutStoreDescriptionBody {
  id: string;
  description: string;
}

export const putStoreDescription = async (reqBody: PutStoreDescriptionBody) => {
  const reqUrl = new URL('/api/store', process.env.NEXT_PUBLIC_BASE_URL);

  const res = await fetch(reqUrl, {
    method: 'PATCH',
    body: JSON.stringify(reqBody),
  });
  const body = await res.json();
  return Promise.resolve(body);
};
