import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { SupabaseTable } from '@/app/api/types';

export async function GET(req: NextRequest) {
  const storeId = req.nextUrl.searchParams.getAll('id');
  const query = await supabase
    .from(SupabaseTable.STORES)
    .select('store_id, store_name, store_cost, monthly_revenue')
    .eq('deleted', 'FALSE')
    .in('store_id', storeId);

  return NextResponse.json({ data: query.data });
}
