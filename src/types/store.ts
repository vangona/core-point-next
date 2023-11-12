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

export type ExpenditureDetail = Record<string, number>;

export interface SalesDetail {
  monthlySales: number;
  monthlyExpenditure: number;
  monthlyRevenue: number;
  salesReason: string;
}

export interface StoreDetail {
  storeData: Store;
  expenditureDetail: ExpenditureDetail;
  salesDetail: SalesDetail;
  description: string;
}
