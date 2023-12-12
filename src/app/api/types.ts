import type { PostgrestError } from '@supabase/supabase-js';

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }>
  ? Exclude<U, null>
  : never;
export type DbResultErr = PostgrestError;

export enum SupabaseTable {
  STORES = 'stores',
  OPENING_REQUEST = 'opening_request',
  PARTNERSHIP_REQUEST = 'partnership_request',
  PARTNERSHIP_BRANDS = 'partnership_brands',
  TRANSFER_REQUEST = 'transfer_request',
}

export enum StoresColumn {
  STORE_ID = 'store_id',
  STORE_NAME = 'store_name',
  STORE_NUMBER = 'store_number',
  STORE_LOCATION = 'store_location',
  STORE_SIZE = 'store_size',
  STORE_CATEGORY = 'store_category',
  STORE_COST = 'store_cost',
  MONTHLY_SALES = 'monthly_sales',
  MONTHLY_REVENUE = 'monthly_revenue',
  MONTHLY_COST = 'monthly_cost',
  SALES_REASON = 'sales_reason',
  MANAGER = 'manager',
  MANAGER_CONTACT = 'manager_contact',
  DESCRIPTION = 'description',
  MOBILE_DESCRIPTION = 'mobile_description',
  STORE_SIZE_M2 = 'store_size_m2',
  STORE_IMG_SRC_ARR = 'store_img_src_arr',
  STORE_STATE = 'store_state',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
  DELETED = 'deleted',
  MEMO = 'memo',
}
export enum OpeningRequestColumn {
  ID = 'id',
  NAME = 'name',
  CONTACT = 'contact',
  CATEGORY = 'category',
  LOCATION = 'location',
  BUDGET = 'budget',
  REQUEST_STATE = 'request_state',
  ADDITIONAL = 'additional',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
  DELETED = 'deleted',
  MEMO = 'memo',
}

export enum TransferRequestColumn {
  ID = 'id',
  NAME = 'name',
  CONTACT = 'contact',
  LOCATION = 'location',
  SIZE = 'size',
  STORE_NAME = 'store_name',
  CATEGORY = 'category',
  REQUEST_STATE = 'request_state',
  ADDITIONAL = 'additional',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
  DELETED = 'deleted',
  MEMO = 'memo',
}

export enum PartnershipRequestColumn {
  ID = 'id',
  NAME = 'name',
  CONTACT = 'contact',
  BRAND_NAME = 'brand_name',
  REQUEST_STATE = 'request_state',
  ADDITIONAL = 'additional',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
  DELETED = 'deleted',
  MEMO = 'memo',
}

export enum PartnershipBrandsColumn {
  ID = 'id',
  BRAND_NAME = 'brand_name',
  BRAND_IMG_SRC = 'brand_img_src',
  BRAND_URL = 'brand_url',
  BRAND_STATE = 'brand_state',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
  DELETED = 'deleted',
}

export enum StoreState {
  PROGRESS = '추진',
  MANAGED = '관리',
  WAIT = '보류',
}

export enum RequestState {
  COMPLETE = '완료',
  IN_PROGRESS = '진행중',
  WAIT = '대기',
}

export enum SupabaseBoolean {
  TRUE = 'TRUE',
  FALSE = 'FALSE',
}
