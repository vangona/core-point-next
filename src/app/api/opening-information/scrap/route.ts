import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';

export async function POST() {
  const response = await fetch(
    'https://blog.naver.com/PostList.naver?from=postList&blogId=corepoint_&categoryNo=1&currentPage=1',
  );
  const body = await response.text();
  const $ = cheerio.load(body);
  const data = $('ul.thumblist li.item').map((i, el) => {
    const url = $(el).find('a.link').attr('href');
    const imgSrc = $(el).find('div.area_thumb img.thumb').attr('src');
    const title = $(el).find('div.area_text .title').text();
    return { url, imgSrc, title };
  });

  return NextResponse.json({ data: Array.from(data) });
}
