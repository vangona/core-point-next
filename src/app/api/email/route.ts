import ElasticEmail from '@elasticemail/elasticemail-client';
import { NextRequest, NextResponse } from 'next/server';
import { elasticEmailApi } from '../elastic';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email = ElasticEmail.EmailMessageData.constructFromObject({
    Recipients: [new ElasticEmail.EmailRecipient('rlarhksrud14@gmail.com')],
    Content: {
      Body: [
        ElasticEmail.BodyPart.constructFromObject({
          ContentType: 'HTML',
          Content: 'My test email content ;)',
        }),
      ],
      Subject: 'JS EE lib test',
      From: 'MyEmail ',
    },
  });

  elasticEmailApi.emailsPost(email, (error: any, data: any, response: any) => {
    console.log(error, data, response);
  });

  return NextResponse.json({ status: 'good' });
}
