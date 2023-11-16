import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/api/supabase';
import { SupabaseTable } from '@/api/types';

export async function GET(req: NextRequest) {
  const storeId = req.nextUrl.searchParams.get('id');
  const query = await supabase
    .from(SupabaseTable.STORES)
    .select(`*, ${SupabaseTable.COST_DETAILS}( * )`)
    .eq('store_id', storeId);

  return NextResponse.json({ data: query.data });
}
