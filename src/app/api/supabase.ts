import { createClient } from '@supabase/supabase-js';

export interface TableDefinitions {
  stores: {
    store_id: number;
    store_name: string;
    store_location: string;
    store_size: string;
    store_category: '카페 / 디저트';
    store_cost: number;
    monthly_sales: number;
    monthly_revenue: number;
    monthly_cost: number;
    sales_reason: string;
    manager: string;
    manager_contact: string;
    created_at: string;
    updated_at: string;
    deleted: boolean;
    store_size_m2?: string;
    store_img_src_arr?: string[];
  };
}

export type TableStores = TableDefinitions['stores'];

export interface Database {
  public: {
    Tables: TableStores;
  };
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
);
