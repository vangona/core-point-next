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
  'https://kxaspmdxzvafhksqyboo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4YXNwbWR4enZhZmhrc3F5Ym9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4Mzk2NjUsImV4cCI6MjAxNDQxNTY2NX0.NsFAV3ddcRFSu3ghEW3j5i7CikH_KD0tz1yXEopxta8',
);
