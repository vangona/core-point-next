import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { StoresColumn, SupabaseTable } from '@/app/api/types';

export interface PatchStoreMobileDescriptionBody {
  id: string;
  mobile_description: string;
}

export async function PATCH(req: NextRequest) {
  const body = (await req.json()) as PatchStoreMobileDescriptionBody;

  const query = await supabase
    .from(SupabaseTable.STORES)
    .update({
      [StoresColumn.MOBILE_DESCRIPTION]: body.mobile_description,
    })
    .eq(StoresColumn.STORE_ID, body.id);

  return NextResponse.json({ data: query.data });
}
