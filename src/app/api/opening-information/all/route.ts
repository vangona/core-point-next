import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { SupabaseTable } from '@/app/api/types';

export async function GET(req: NextRequest) {
  const { data, count } = await supabase
    .from(SupabaseTable.OPENING_INFORMATIONS)
    .select('*', { count: 'exact' })
    .eq('deleted', 'FALSE');

  return NextResponse.json({ data, count });
}
