import { OpeningFormInput } from '@/components/consulting/opening/OpeningForm';

export const postOpeningConsulting = async (reqBody: OpeningFormInput) => {
  const reqUrl = new URL(
    '/api/consulting/opening',
    process.env.NEXT_PUBLIC_BASE_URL,
  );

  const res = await fetch(reqUrl, {
    method: 'POST',
    body: JSON.stringify(reqBody),
  });
  const body = await res.json();
  return Promise.resolve(body);
};
