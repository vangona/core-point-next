import { NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import {
  StoreState,
  StoresColumn,
  SupabaseBoolean,
  SupabaseTable,
} from '@/app/api/types';

export async function GET() {
  const query = await supabase
    .from(SupabaseTable.STORES)
    .select()
    .eq(StoresColumn.DELETED, SupabaseBoolean.FALSE)
    .eq(StoresColumn.STORE_STATE, StoreState.PROGRESS)
    .range(0, 10);

  return NextResponse.json({ data: query.data });
}
