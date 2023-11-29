import { NextRequest, NextResponse } from 'next/server';
import { PutStoreDescriptionBody } from '@/api/store/putStoreDescription';
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

  let query = supabase.from(SupabaseTable.STORES).select('*');

  if (category) query = query.eq('store_category', category);
  if (parsedBudget && parsedBudget[0] !== '30000') {
    query = query.gte('store_cost', parseInt(parsedBudget[0]));
    query = query.lt('store_cost', parseInt(parsedBudget[1]));
  }
  if (parsedBudget && parsedBudget[0] === '30000') {
    query = query.gte('store_cost', parseInt(parsedBudget[0]));
  }
  if (location) query = query.eq('store_location', location);
  if (search) query = query.ilike('store_name', `%${search}%`);

  query = query
    .eq('deleted', 'FALSE')
    .range(page * limit, (page + 1) * limit - 1)
    .order('store_name', { ascending: false }); // 시작이 0부터 이기 때문에 1을 빼줌

  const { data } = await query;

  return NextResponse.json({ data });
}

export async function PATCH(req: NextRequest) {
  const body = (await req.json()) as PutStoreDescriptionBody;

  const query = await supabase
    .from(SupabaseTable.STORES)
    .update({
      [StoresColumn.DESCRIPTION]: body.description,
    })
    .eq(StoresColumn.STORE_ID, body.id);

  return NextResponse.json({ data: query.data });
}
