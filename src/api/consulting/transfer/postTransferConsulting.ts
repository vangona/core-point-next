import { TransferFormInput } from '@/components/consulting/transfer/TransferForm';

export const postTransferConsulting = async (reqBody: TransferFormInput) => {
  const reqUrl = new URL(
    '/api/consulting/transfer',
    process.env.NEXT_PUBLIC_BASE_URL,
  );

  const res = await fetch(reqUrl, {
    method: 'POST',
    body: JSON.stringify(reqBody),
  });
  const body = await res.json();
  return Promise.resolve(body);
};
