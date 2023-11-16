export interface Store {
  storeId: string;
  storeImgSrcArr?: string[];
  storeName: string;
  storeLocation: string;
  storeSize: string;
  storeCategory: string;
  storeCost: number;
  monthlySales: number;
  monthlyCost: number;
  monthlyRevenue: number;
  manager: string;
  managerContact: string;
}

export interface CostDetail {
  personalCost?: number;
  materialCost?: number;
  rentCost?: number;
  duesCost?: number;
  etcCost?: number;
}

export interface StoreDetail {
  storeData: Store;
  costDetail: CostDetail;
  description: string;
}
