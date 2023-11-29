import { createClient } from '@supabase/supabase-js';
import { StoreCategoy, StoreLocation } from '@/components/store/constants';
import {
  OpeningRequestColumn,
  PartnershipBrandsColumn,
  PartnershipRequestColumn,
  RequestState,
  StoreState,
  StoresColumn,
  TransferRequestColumn,
} from './types';

export enum DbTables {
  STORES = 'stores',
  OPENING_REQUEST = 'opening_request',
  TRANSFER_REQUEST = 'transfer_request',
  PARTNERSHIP_REQUEST = 'partnership_request',
  PARTNERSHIP_BRANDS = 'partnership_brands',
}

export interface OpeningRequest {
  [OpeningRequestColumn.ID]: number;
  [OpeningRequestColumn.NAME]: string;
  [OpeningRequestColumn.CONTACT]: string;
  [OpeningRequestColumn.CATEGORY]: string;
  [OpeningRequestColumn.LOCATION]: string;
  [OpeningRequestColumn.BUDGET]: string;
  [OpeningRequestColumn.ADDITIONAL]: string;
  [OpeningRequestColumn.CREATED_AT]: string;
  [OpeningRequestColumn.UPDATED_AT]: string;
  [OpeningRequestColumn.DELETED]: boolean;
  [OpeningRequestColumn.REQUEST_STATE]: RequestState;
  [OpeningRequestColumn.MEMO]: string;
}

export interface TransferRequest {
  [TransferRequestColumn.ID]: number;
  [TransferRequestColumn.NAME]: string;
  [TransferRequestColumn.CONTACT]: string;
  [TransferRequestColumn.LOCATION]: string;
  [TransferRequestColumn.SIZE]: string;
  [TransferRequestColumn.STORE_NAME]: string;
  [TransferRequestColumn.CATEGORY]: string;
  [TransferRequestColumn.ADDITIONAL]: string;
  [TransferRequestColumn.CREATED_AT]: string;
  [TransferRequestColumn.UPDATED_AT]: string;
  [TransferRequestColumn.DELETED]: boolean;
  [TransferRequestColumn.REQUEST_STATE]: RequestState;
  [TransferRequestColumn.MEMO]: string;
}

export interface PartnershipRequest {
  [PartnershipRequestColumn.ID]: number;
  [PartnershipRequestColumn.NAME]: string;
  [PartnershipRequestColumn.CONTACT]: string;
  [PartnershipRequestColumn.BRAND_NAME]: string;
  [PartnershipRequestColumn.ADDITIONAL]: string;
  [PartnershipRequestColumn.REQUEST_STATE]: RequestState;
  [PartnershipRequestColumn.CREATED_AT]: string;
  [PartnershipRequestColumn.UPDATED_AT]: string;
  [PartnershipRequestColumn.DELETED]: boolean;
  [PartnershipRequestColumn.MEMO]: string;
}

export interface PartnershipBrand {
  [PartnershipBrandsColumn.ID]: number;
  [PartnershipBrandsColumn.BRAND_NAME]: string;
  [PartnershipBrandsColumn.BRAND_IMG_SRC]: string;
  [PartnershipBrandsColumn.BRAND_URL]: string;
  [PartnershipBrandsColumn.BRAND_STATE]: StoreState;
  [PartnershipBrandsColumn.CREATED_AT]: string;
  [PartnershipBrandsColumn.UPDATED_AT]: string;
  [PartnershipBrandsColumn.DELETED]: boolean;
}

export interface TableDefinitions {
  [DbTables.STORES]: {
    [StoresColumn.STORE_ID]: number;
    [StoresColumn.STORE_NAME]: string;
    [StoresColumn.STORE_LOCATION]: StoreLocation;
    [StoresColumn.STORE_SIZE]: string;
    [StoresColumn.STORE_CATEGORY]: StoreCategoy;
    [StoresColumn.STORE_COST]: number;
    [StoresColumn.MONTHLY_SALES]: number;
    [StoresColumn.MONTHLY_REVENUE]: number;
    [StoresColumn.MONTHLY_COST]: number;
    [StoresColumn.SALES_REASON]: string;
    [StoresColumn.MANAGER]: string;
    [StoresColumn.MANAGER_CONTACT]: string;
    [StoresColumn.DESCRIPTION]: string;
    [StoresColumn.CREATED_AT]: string;
    [StoresColumn.UPDATED_AT]: string;
    [StoresColumn.DELETED]: boolean;
    [StoresColumn.STORE_SIZE_M2]?: string;
    [StoresColumn.STORE_IMG_SRC_ARR]?: string[];
    [StoresColumn.STORE_STATE]: StoreState;
    [StoresColumn.MEMO]: string;
  };
  [DbTables.OPENING_REQUEST]: OpeningRequest;
  [DbTables.TRANSFER_REQUEST]: TransferRequest;
  [DbTables.PARTNERSHIP_REQUEST]: PartnershipRequest;
  [DbTables.PARTNERSHIP_BRANDS]: PartnershipBrand;
}

export enum Storages {
  STORE_IMG = 'store_img',
  BRAND_IMG = 'brand_img',
}

export interface Database {
  public: {
    Tables: TableDefinitions;
  };
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
);
