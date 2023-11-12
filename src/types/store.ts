export interface Store {
  storeId: string;
  storeImgSrcArr?: string[];
  storeName: string;
  storeLocation: string;
  storeCost: number;
  storeSize: string;
  storeSales: number;
  storeCategory: string;
  storeRevenue: number;
  manager: string;
  managerContact: string;
}

export type ExpenditureDetail = Record<string, string>;

export interface SalesDetail {
  monthlySales: string;
  monthlyExpenditure: string;
  monthlyRevenue: string;
  salseReason: string;
}

export interface StoreDetail {
  storeData: Store;
  expenditureDetail: ExpenditureDetail;
  salesDetail: SalesDetail;
  description: string;
}
