import { StoreColumnDef } from '@/components/admin/store/constants';

// updatedRow에서 ColumnDef를 기준으로 key를 줌.
export interface PatchStoreBody {
  [StoreColumnDef.ID]?: string;
  [StoreColumnDef.STORE_STATE]?: string;
  [StoreColumnDef.STORE_NAME]?: string;
  [StoreColumnDef.STORE_CATEGORY]?: string;
  [StoreColumnDef.STORE_LOCATION]?: string;
  [StoreColumnDef.STORE_COST]?: string;
  [StoreColumnDef.STORE_SIZE]?: string;
  [StoreColumnDef.STORE_SIZE_M2]?: string;
  [StoreColumnDef.MONTHLY_SALES]?: string;
  [StoreColumnDef.MONTHLY_COST]?: string;
  [StoreColumnDef.MONTHLY_REVENUE]?: string;
  [StoreColumnDef.PERSONAL_COST]?: string;
  [StoreColumnDef.MATERIAL_COST]?: string;
  [StoreColumnDef.RENT_COST]?: string;
  [StoreColumnDef.DUES_COST]?: string;
  [StoreColumnDef.ETC_COST]?: string;
  [StoreColumnDef.MANAGER]?: string;
  [StoreColumnDef.MANAGER_CONTACT]?: string;
}

export const patchStore = async (reqBody: PatchStoreBody) => {
  const reqUrl = new URL('/api/store', process.env.NEXT_PUBLIC_BASE_URL);

  const res = await fetch(reqUrl, {
    method: 'PATCH',
    body: JSON.stringify(reqBody),
  });
  const body = await res.json();
  return Promise.resolve(body);
};
