import { NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { SupabaseTable } from '@/app/api/types';

export async function GET() {
  const { count } = await supabase
    .from(SupabaseTable.STORES)
    .select('*', { count: 'exact', head: true })
    .eq('deleted', 'FALSE');

  return NextResponse.json({ data: count });
}
