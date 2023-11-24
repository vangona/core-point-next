import { NextRequest, NextResponse } from 'next/server';
import { TransferFormInput } from '@/components/consulting/transfer/TransferForm';
import { resend } from '../../resend';
import { supabase } from '../../supabase';
import { SupabaseTable, TransferRequestColumn } from '../../types';

export async function POST(req: NextRequest) {
  const body = (await req.json()) as TransferFormInput;

  const query = await supabase.from(SupabaseTable.TRANSFER_REQUEST).insert([
    {
      [TransferRequestColumn.NAME]: body.name,
      [TransferRequestColumn.CONTACT]: body.contact,
      [TransferRequestColumn.LOCATION]: body.location,
      [TransferRequestColumn.SIZE]: body.size,
      [TransferRequestColumn.STORE_NAME]: body.storeName,
      [TransferRequestColumn.CATEGORY]: body.category,
      [TransferRequestColumn.ADDITIONAL]: body.additional,
    },
  ]);

  resend.emails.send({
    from: '코어창업 <noreply@core-point.kr>',
    to: ['corepoint0905@naver.com'],
    subject: `새로운 양도 컨설팅 요청이 접수되었습니다. ${body.name}님, ${body.storeName}건`,
    text: `성함 : ${body.name}
연락처 : ${body.contact}
사업체 위치 : ${body.location}
사업체 크기 : ${body.size} 
상호명 : ${body.storeName}
업종 : ${body.category}
추가 문의사항 : ${body.additional ? body.additional : '없음'}   
`,
  });

  return NextResponse.json({ data: query.data });
}
