import type { TransferFormInput } from '@/components/consulting/transfer/TransferForm';

export const postEmail = async (reqBody: TransferFormInput) => {
  const reqUrl = new URL('/api/email', process.env.NEXT_PUBLIC_BASE_URL);

  const res = await fetch(reqUrl, {
    method: 'POST',
    body: JSON.stringify(reqBody),
  });
  const resBody = await res.json();
  return Promise.resolve(resBody);
};
