import { PartnershipFormInput } from '@/components/partnership/PartnershipForm';

export const postPartnershipConsulting = async (
  reqBody: PartnershipFormInput,
) => {
  const reqUrl = new URL('/api/partnership', process.env.NEXT_PUBLIC_BASE_URL);

  const res = await fetch(reqUrl, {
    method: 'POST',
    body: JSON.stringify(reqBody),
  });
  const body = await res.json();
  return Promise.resolve(body);
};
