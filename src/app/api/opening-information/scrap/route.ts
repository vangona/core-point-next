import * as cheerio from 'cheerio';
import { NextRequest, NextResponse } from 'next/server';
import { ScrappedOpeningInformation } from '@/api/opening-information';

export async function POST(req: NextRequest) {
  const lastPage = parseInt(req.nextUrl.searchParams.get('lastPage') ?? '1');

  const result: ScrappedOpeningInformation[] = [];

  const scrapUrlArr = new Array(lastPage).fill(0);

  const promises = scrapUrlArr.map(async (_, index) => {
    const scrapUrl =
      'https://blog.naver.com/PostList.naver?from=postList&blogId=corepoint_&categoryNo=1&currentPage=' +
      (index + 1);
    const response = await fetch(scrapUrl);
    const body = await response.text();
    const $ = cheerio.load(body);
    const data = $('ul.thumblist li.item').map((i, el) => {
      const url = 'https://blog.naver.com' + $(el).find('a.link').attr('href');
      const imgSrc = $(el).find('div.area_thumb img.thumb').attr('src');
      const title = $(el).find('div.area_text .title').text();
      return { url, imgSrc, title };
    });

    const parsedArray = Array.from(data);
    result.push(...parsedArray);
  });

  await Promise.all(promises);

  return NextResponse.json({ data: result });
}
