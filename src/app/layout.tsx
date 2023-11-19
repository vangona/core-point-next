import React from 'react';
import '@/app/globals.css';
import { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import ConditionalLayout from './conditionalLayout';
import ReactQueryRegistry from './ReactQueryRegistry';
import ThemeRegistry from './ThemeRegistry';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '코어창업',
  description: '코어창업이 창업을 위한 열쇠가 되어드리겠습니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={notoSansKr.className}>
        <ReactQueryRegistry>
          <ThemeRegistry>
            <ConditionalLayout>{children}</ConditionalLayout>
          </ThemeRegistry>
        </ReactQueryRegistry>
      </body>
    </html>
  );
}
