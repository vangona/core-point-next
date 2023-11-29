import { NextRequest, NextResponse } from 'next/server';
import { PatchStoreImgBody } from '@/api/store/patchStoreImg';
import { supabase } from '@/app/api/supabase';
import { StoresColumn, SupabaseTable } from '@/app/api/types';

export async function PATCH(req: NextRequest) {
  const body = (await req.json()) as PatchStoreImgBody;

  const query = await supabase
    .from(SupabaseTable.STORES)
    .update({
      [StoresColumn.STORE_IMG_SRC_ARR]: body.imgSrcArr,
    })
    .eq(StoresColumn.STORE_ID, body.id);

  return NextResponse.json({ data: query.data });
}
