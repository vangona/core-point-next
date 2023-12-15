export interface PatchStoreTagsBody {
  id: string;
  tags: string[];
}

export const patchStoreTags = async (reqBody: PatchStoreTagsBody) => {
  const reqUrl = new URL('/api/store/tags', process.env.NEXT_PUBLIC_BASE_URL);

  const res = await fetch(reqUrl, {
    method: 'PATCH',
    body: JSON.stringify(reqBody),
  });
  const body = await res.json();
  return Promise.resolve(body);
};
