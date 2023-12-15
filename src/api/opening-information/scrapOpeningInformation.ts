import { OpeningInformation } from './types';

export interface ScrapOpeningInformationResponse {
  data: Pick<OpeningInformation, 'title' | 'url' | 'imgSrc'>[];
}

export const scrapOpeningInformation =
  async (): Promise<ScrapOpeningInformationResponse> => {
    const reqUrl = new URL(
      '/api/opening-information/scrap',
      process.env.NEXT_PUBLIC_BASE_URL,
    );

    const res = await fetch(reqUrl, { method: 'POST' });
    const body = await res.json();
    return Promise.resolve(body);
  };
