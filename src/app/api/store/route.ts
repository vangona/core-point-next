import { NextRequest, NextResponse } from 'next/server';
import { DeleteStoreBody } from '@/api/store/deleteStore';
import { PatchStoreBody } from '@/api/store/patchStore';
import { supabase } from '@/app/api/supabase';
import { StoresColumn, SupabaseTable } from '@/app/api/types';
import { StoreCategoy } from '@/components/store/constants';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from './constants';

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get('page') ?? DEFAULT_PAGE); // 빈 값이면 첫 페이지인 0
  const limit = parseInt(req.nextUrl.searchParams.get('limt') ?? DEFAULT_LIMIT); // 빈 값이면 기본값인 20
  const category = req.nextUrl.searchParams.get(
    'category',
  ) as StoreCategoy | null; // string 타입추론을 위해서 as 사용
  const budget = req.nextUrl.searchParams.get('budget');
  const location = req.nextUrl.searchParams.get('location');
  const search = req.nextUrl.searchParams.get('search');

  const parsedBudget = budget ? budget.split(',') : undefined;

  let query = supabase
    .from(SupabaseTable.STORES)
    .select('*', { count: 'exact' });

  if (category) query = query.eq('store_category', category);
  if (parsedBudget && parsedBudget[0] !== '30000') {
    query = query.gte('store_cost', parseInt(parsedBudget[0]));
    query = query.lt('store_cost', parseInt(parsedBudget[1]));
  }
  if (parsedBudget && parsedBudget[0] === '30000') {
    query = query.gte('store_cost', parseInt(parsedBudget[0]));
  }
  if (location) query = query.eq('store_location', location);
  if (search) {
    const searchQueryStr = isNaN(parseInt(search))
      ? `${StoresColumn.STORE_NAME}.ilike.%${search}%,${StoresColumn.DESCRIPTION}.ilike.%${search}%`
      : `${StoresColumn.STORE_NAME}.ilike.%${search}%,${StoresColumn.DESCRIPTION}.ilike.%${search}%,${StoresColumn.STORE_NUMBER}.eq.${search}`;
    query = query.or(searchQueryStr);
  }

  query = query
    .eq('deleted', 'FALSE')
    .range(page * limit, (page + 1) * limit - 1) // 시작이 0부터 이기 때문에 1을 빼줌
    .order('created_at', { ascending: false });

  const { data, count } = await query;

  return NextResponse.json({ data, count });
}

export async function PATCH(req: NextRequest) {
  const body = (await req.json()) as PatchStoreBody;

  const query = await supabase
    .from(SupabaseTable.STORES)
    .upsert({
      [StoresColumn.STORE_STATE]: body.storeState,
      [StoresColumn.STORE_NAME]: body.storeName,
      [StoresColumn.STORE_CATEGORY]: body.storeCategory,
      [StoresColumn.STORE_LOCATION]: body.storeLocation,
      [StoresColumn.STORE_COST]: body.storeCost,
      [StoresColumn.STORE_SIZE]: body.storeSize,
      [StoresColumn.STORE_SIZE_M2]: body.storeSizeM2,
      [StoresColumn.MONTHLY_SALES]: body.monthlySales,
      [StoresColumn.MONTHLY_COST]: body.monthlyCost,
      [StoresColumn.MONTHLY_REVENUE]: body.monthlyRevenue,
      [StoresColumn.PERSONAL_COST]: body.personalCost,
      [StoresColumn.MATERIAL_COST]: body.meterialCost,
      [StoresColumn.RENT_COST]: body.rentCost,
      [StoresColumn.DUES_COST]: body.duesCost,
      [StoresColumn.ETC_COST]: body.etcCost,
      [StoresColumn.MANAGER]: body.manager,
      [StoresColumn.MANAGER_CONTACT]: body.managerContact,
    })
    .eq(StoresColumn.STORE_ID, body.id)
    .select();

  return NextResponse.json({ data: query.data });
}

export async function DELETE(req: NextRequest) {
  const body = (await req.json()) as DeleteStoreBody;

  const query = await supabase
    .from(SupabaseTable.STORES)
    .update({
      [StoresColumn.DELETED]: true,
    })
    .eq(StoresColumn.STORE_ID, body.store_id)
    .select();

  return NextResponse.json({ data: query.data });
}
