export type StoreImgData = { filename: string; file: File };

export interface PostStoreImgResponse {
  data: { path: string | null };
  error: Error | null;
}

export const postStoreImg = async (
  reqBody: StoreImgData,
): Promise<PostStoreImgResponse> => {
  const reqUrl = new URL(
    '/api/storage/store-img',
    process.env.NEXT_PUBLIC_BASE_URL,
  );

  const formData = new FormData();
  formData.append('filename', reqBody.filename);
  formData.append('file', reqBody.file);

  const res = await fetch(reqUrl, {
    method: 'POST',
    body: formData,
  });
  const body = await res.json();
  return Promise.resolve(body);
};
