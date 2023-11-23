import { PartnershipBrand } from '@/app/api/supabase';

export interface GetPartnershipBrandResponse {
  data: PartnershipBrand[];
}
export const getPartnershipBrand =
  async (): Promise<GetPartnershipBrandResponse> => {
    const reqUrl = new URL(
      '/api/partnership',
      process.env.NEXT_PUBLIC_BASE_URL,
    );

    const res = await fetch(reqUrl);
    const body = await res.json();
    return Promise.resolve(body);
  };
