import { NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { SupabaseTable } from '@/app/api/types';

export async function GET() {
  const query = await supabase
    .from(SupabaseTable.SUCCESS_EXAMPLE)
    .select()
    .eq('deleted', 'FALSE');

  return NextResponse.json({ data: query.data });
}
