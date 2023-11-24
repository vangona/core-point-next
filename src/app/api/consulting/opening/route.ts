import { NextRequest, NextResponse } from 'next/server';
import { OpeningFormInput } from '@/components/consulting/opening/OpeningForm';
import { resend } from '../../resend';
import { supabase } from '../../supabase';
import { OpeningRequestColumn, SupabaseTable } from '../../types';

export async function POST(req: NextRequest) {
  const body = (await req.json()) as OpeningFormInput;

  const query = await supabase.from(SupabaseTable.OPENING_REQUEST).insert([
    {
      [OpeningRequestColumn.NAME]: body.name,
      [OpeningRequestColumn.CONTACT]: body.contact,
      [OpeningRequestColumn.LOCATION]: body.location,
      [OpeningRequestColumn.CATEGORY]: body.category,
      [OpeningRequestColumn.BUDGET]: body.budget,
      [OpeningRequestColumn.ADDITIONAL]: body.additional,
    },
  ]);

  resend.emails.send({
    from: '코어창업 <noreply@core-point.kr>',
    to: ['corepoint0905@naver.com'],
    subject: `새로운 창업 컨설팅 요청이 접수되었습니다. ${body.name} - ${body.contact}님 건`,
    text: `성함 : ${body.name}
연락처 : ${body.contact}
업종 : ${body.category}
예산 : ${body.budget}
지역 : ${body.location}
추가 문의사항 : ${body.additional ? body.additional : '없음'}   
`,
  });

  return NextResponse.json({ data: query.data });
}
