import { NextRequest, NextResponse } from 'next/server';
import { PatchStoreDescriptionBody } from '@/api/store/patchStoreDescription';
import { supabase } from '../../supabase';
import { SupabaseTable, StoresColumn } from '../../types';

export async function PATCH(req: NextRequest) {
  const body = (await req.json()) as PatchStoreDescriptionBody;

  const query = await supabase
    .from(SupabaseTable.STORES)
    .update({
      [StoresColumn.DESCRIPTION]: body.description,
    })
    .eq(StoresColumn.STORE_ID, body.id);

  return NextResponse.json({ data: query.data });
}
