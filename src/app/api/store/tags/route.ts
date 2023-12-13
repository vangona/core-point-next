import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/api/supabase';
import { StoresColumn, SupabaseTable } from '@/app/api/types';

export interface PatchStoreTagsBody {
  id: string;
  tags: string[];
}

export async function PATCH(req: NextRequest) {
  const body = (await req.json()) as PatchStoreTagsBody;

  const query = await supabase
    .from(SupabaseTable.STORES)
    .update({
      [StoresColumn.STORE_TAGS]: body.tags,
    })
    .eq(StoresColumn.STORE_ID, body.id);

  return NextResponse.json({ data: query.data });
}
