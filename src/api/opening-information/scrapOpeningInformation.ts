import { ScrappedOpeningInformation } from './types';

export interface ScrapOpeningInformationResponse {
  data: ScrappedOpeningInformation[];
}

export const scrapOpeningInformation = async (
  lastPage = 7,
): Promise<ScrapOpeningInformationResponse> => {
  const reqUrl = new URL(
    '/api/opening-information/scrap',
    process.env.NEXT_PUBLIC_BASE_URL,
  );
  reqUrl.searchParams.set('lastPage', lastPage.toString());

  const res = await fetch(reqUrl, { method: 'POST' });
  const body = await res.json();
  return Promise.resolve(body);
};
