import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { SupabaseTable } from '@/app/api/types';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from './constants';

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get('page') ?? DEFAULT_PAGE); // 빈 값이면 첫 페이지인 0
  const limit = parseInt(req.nextUrl.searchParams.get('limt') ?? DEFAULT_LIMIT); // 빈 값이면 기본값인 20
  const query = await supabase
    .from(SupabaseTable.STORES)
    .select('*')
    .range(page * limit, (page + 1) * limit);

  return NextResponse.json({ data: query.data });
}
