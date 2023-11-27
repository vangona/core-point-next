import React from 'react';
import '@/app/globals.css';
import { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import ConditionalLayout from './conditionalLayout';
import ReactQueryRegistry from './ReactQueryRegistry';
import ThemeRegistry from './ThemeRegistry';
import type { SwiperProps, SwiperSlideProps } from 'swiper/react';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >;
      'swiper-slide': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}

export const metadata: Metadata = {
  title: '코어창업',
  description: '코어창업이 창업을 위한 열쇠가 되어드리겠습니다.',
  robots: 'index,follow',
  openGraph: {
    title: '코어창업',
    description:
      '코어창업, 코어창업이 창업을 위한 열쇠가 되어드리겠습니다. 점포 창업 | 창업 컨설팅 | 양도 컨설팅 | 프랜차이즈 창업 | 프랜차이즈 협업',
    siteName: '코어창업',
    url: 'https://www.core-point.kr',
    type: 'website',
    images: { url: '/logo.png' },
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.core-point.kr',
  ),
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
