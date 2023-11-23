import { NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { StoresColumn, SupabaseTable } from '@/app/api/types';

export async function GET() {
  const query = await supabase
    .from(SupabaseTable.STORES)
    .select()
    .eq(StoresColumn.DELETED, 'FALSE')
    .order(StoresColumn.CREATED_AT)
    .range(0, 10);

  return NextResponse.json({ data: query.data });
}
