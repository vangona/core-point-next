export interface PatchStoreImgBody {
  id: string;
  imgSrcArr: string[];
}

export const patchStoreImg = async (reqBody: PatchStoreImgBody) => {
  const reqUrl = new URL('/api/store/img', process.env.NEXT_PUBLIC_BASE_URL);

  const res = await fetch(reqUrl, {
    method: 'PATCH',
    body: JSON.stringify(reqBody),
  });
  const body = await res.json();
  return Promise.resolve(body);
};
