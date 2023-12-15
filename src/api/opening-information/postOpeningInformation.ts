import { OpeningInformation } from '.';

export interface PostOpeningInformationBody {
  openingInformations: OpeningInformation[];
}

export const postOpeningInformation = async (
  reqBody: PostOpeningInformationBody,
) => {
  const reqUrl = new URL(
    '/api/opening-information',
    process.env.NEXT_PUBLIC_BASE_URL,
  );

  const res = await fetch(reqUrl, {
    method: 'post',
    body: JSON.stringify(reqBody),
  });
  const body = await res.json();
  return Promise.resolve(body);
};
