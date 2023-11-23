import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/app/api/resend';
import { supabase } from '@/app/api/supabase';
import { PartnershipFormInput } from '@/components/partnership/PartnershipForm';
import {
  PartnershipBrandsColumn,
  StoreState,
  SupabaseBoolean,
  SupabaseTable,
} from '../types';

export async function POST(req: NextRequest) {
  const body = (await req.json()) as PartnershipFormInput;

  resend.emails.send({
    from: '코어창업 <noreply@core-point.kr>',
    to: ['corepoint0905@naver.com'],
    subject: `새로운 협업 신청이 접수되었습니다. ${body.name}님, ${body.brandName} 건`,
    text: `담당자 성함 : ${body.name}
담당자 연락처 : ${body.contact}
브랜드명 : ${body.brandName}
추가 문의사항 : ${body.additional ? body.additional : '없음'}   
`,
  });

  return NextResponse.json({ status: 'good' });
}

export async function GET() {
  const query = await supabase
    .from(SupabaseTable.PARTNERSHIP_BRANDS)
    .select()
    .eq(PartnershipBrandsColumn.DELETED, SupabaseBoolean.FALSE)
    .eq(PartnershipBrandsColumn.BRAND_STATE, StoreState.PROGRESS);

  return NextResponse.json({ data: query.data });
}
