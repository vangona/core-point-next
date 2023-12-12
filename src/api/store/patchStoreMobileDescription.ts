export interface PatchStoreMobileDescriptionBody {
  id: string;
  mobile_description: string;
}

export const patchStoreMobileDescription = async (
  reqBody: PatchStoreMobileDescriptionBody,
) => {
  const reqUrl = new URL(
    '/api/store/mobile-description',
    process.env.NEXT_PUBLIC_BASE_URL,
  );

  const res = await fetch(reqUrl, {
    method: 'PATCH',
    body: JSON.stringify(reqBody),
  });
  const body = await res.json();
  return Promise.resolve(body);
};
