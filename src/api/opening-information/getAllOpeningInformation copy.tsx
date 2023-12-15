import { OpeningInformation } from './types';

export interface GetAllOpeningInformationResponse {
  data: OpeningInformation[];
  count: number;
}

export const getAllOpeningInformation =
  async (): Promise<GetAllOpeningInformationResponse> => {
    const reqUrl = new URL(
      '/api/opening-information/all',
      process.env.NEXT_PUBLIC_BASE_URL,
    );

    const res = await fetch(reqUrl);
    const body = await res.json();
    return Promise.resolve(body);
  };
