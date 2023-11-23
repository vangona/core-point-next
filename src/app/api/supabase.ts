import { createClient } from '@supabase/supabase-js';
import { StoreCategoy, StoreLocation } from '@/components/store/constants';
import {
  OpeningRequestColumn,
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
  [DbTables.OPENING_REQUEST]: {
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
  };
  [DbTables.TRANSFER_REQUEST]: {
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
  };
  [DbTables.PARTNERSHIP_REQUEST]: {
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
  };
}

export type TableStores = TableDefinitions['stores'];

export interface Database {
  public: {
    Tables: TableDefinitions;
  };
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
);
