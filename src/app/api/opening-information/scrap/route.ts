import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const response = await fetch(
    'https://blog.naver.com/PostList.naver?from=postList&blogId=corepoint_&categoryNo=1&currentPage=1',
  );

  console.log(response);
}
