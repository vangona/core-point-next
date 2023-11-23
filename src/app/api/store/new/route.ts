import { NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { SupabaseTable } from '@/app/api/types';

export async function GET() {
  const query = await supabase
    .from(SupabaseTable.STORES)
    .select()
    .eq('deleted', 'FALSE')
    .order('created_at')
    .range(0, 10);

  return NextResponse.json({ data: query.data });
}
