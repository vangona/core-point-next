export interface Store {
  store_id: string;
  store_number: number;
  store_name: string;
  store_location: string;
  store_size: string;
  store_category: string;
  store_cost: number;
  monthly_sales: number;
  monthly_revenue: number;
  monthly_cost: number;
  manager: string;
  manager_contact: string;
  created_at: string;
  updated_at: string;
  deleted: string;
  sales_reason: string;
  store_size_m2?: string;
  store_img_src_arr?: string[];
  mobile_description?: string;
  description?: string;
  store_tags?: string[];
  personal_cost: number;
  material_cost: number;
  rent_cost: number;
  dues_cost: number;
  etc_cost: number;
}
