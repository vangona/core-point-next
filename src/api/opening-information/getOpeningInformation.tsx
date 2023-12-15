import { OpeningInformation } from './types';

export interface GetOpeningInformationResponse {
  data: OpeningInformation[];
  count: number;
}

export const getOpeningInformation = async ({
  page = 1,
  limit = 10,
}): Promise<GetOpeningInformationResponse> => {
  const reqUrl = new URL(
    '/api/opening-information',
    process.env.NEXT_PUBLIC_BASE_URL,
  );

  const parsedPage = String(page - 1);

  reqUrl.searchParams.set('page', parsedPage);
  reqUrl.searchParams.set('limit', limit.toString());

  const res = await fetch(reqUrl);
  const body = await res.json();
  return Promise.resolve(body);
};
