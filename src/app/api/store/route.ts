import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { SupabaseTable } from '@/app/api/types';
import { StoreCategoy } from '@/components/store/constants';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from './constants';

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get('page') ?? DEFAULT_PAGE); // 빈 값이면 첫 페이지인 0
  const limit = parseInt(req.nextUrl.searchParams.get('limt') ?? DEFAULT_LIMIT); // 빈 값이면 기본값인 20
  const category = req.nextUrl.searchParams.get(
    'category',
  ) as StoreCategoy | null; // string 타입추론을 위해서 as 사용

  if (category) {
    const query = await supabase
      .from(SupabaseTable.STORES)
      .select('*')
      .eq('store_category', category)
      .range(page * limit, (page + 1) * limit - 1)
      .order('store_name', { ascending: false }); // 시작이 0부터 이기 때문에 1을 빼줌

    return NextResponse.json({ data: query.data });
  } else {
    const query = await supabase
      .from(SupabaseTable.STORES)
      .select('*')
      .range(page * limit, (page + 1) * limit - 1)
      .order('store_name', { ascending: false }); // 시작이 0부터 이기 때문에 1을 빼줌

    return NextResponse.json({ data: query.data });
  }
}
