import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { SupabaseTable } from '@/app/api/types';

export async function GET(req: NextRequest) {
  const storeId = req.nextUrl.searchParams.get('id');
  const query = await supabase
    .from(SupabaseTable.STORES)
    .select()
    .eq('deleted', 'FALSE')
    .eq('store_id', storeId);

  return NextResponse.json({ data: query.data });
}
