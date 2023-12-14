import { SuccessExample } from './types';

export interface GetSuccessExampleResponse {
  data?: SuccessExample[];
}

export const getSuccessExample =
  async (): Promise<GetSuccessExampleResponse> => {
    const reqUrl = new URL(
      '/api/success-example',
      process.env.NEXT_PUBLIC_BASE_URL,
    );

    const res = await fetch(reqUrl);
    const body = await res.json();
    return Promise.resolve(body);
  };
