import { NextRequest, NextResponse } from 'next/server';
import { Storages, supabase } from '../../supabase';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const filename = formData.get('filename') as string;
  const file = formData.get('file') as File;

  const query = await supabase.storage
    .from(Storages.STORE_IMG)
    .upload(filename, file);

  return NextResponse.json({ data: query.data, error: query.error });
}
