import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/app/api/resend';
import { PartnershipFormInput } from '@/components/partnership/PartnershipForm';

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
