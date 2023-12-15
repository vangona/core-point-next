import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { SupabaseTable } from '@/app/api/types';

const DEFAULT_PAGE = '0';
const DEFAULT_LIMIT = '6';

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get('page') ?? DEFAULT_PAGE); // 빈 값이면 첫 페이지인 0
  const limit = parseInt(
    req.nextUrl.searchParams.get('limit') ?? DEFAULT_LIMIT,
  ); // 빈 값이면 기본값인 20

  const { data, count } = await supabase
    .from(SupabaseTable.OPENING_INFORMATIONS)
    .select('*', { count: 'exact' })
    .range(page * limit, (page + 1) * limit - 1) // 시작이 0부터 이기 때문에 1을 빼줌
    .eq('deleted', 'FALSE');

  return NextResponse.json({ data, count });
}
