import React, { Suspense } from 'react';
import '@/app/globals.css';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Noto_Sans_KR } from 'next/font/google';
import Head from 'next/head';
import { commonMetaData } from '@/app/commonMetaData';
import * as GoogleTagManger from '@/app/GoogleTagManager';
import ConditionalLayout from './conditionalLayout';
import ReactQueryRegistry from './ReactQueryRegistry';
import ThemeRegistry from './ThemeRegistry';
import type { SwiperProps, SwiperSlideProps } from 'swiper/react';

const GoogleAnalytics = dynamic(() => import('./GoogleAnalytics'), {
  ssr: false,
});

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
  ...commonMetaData,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <Head>
        <Suspense>
          <GoogleAnalytics />
          <GoogleTagManger.HeadTag />
        </Suspense>
      </Head>
      <body className={notoSansKr.className}>
        <ReactQueryRegistry>
          <ThemeRegistry>
            <ConditionalLayout>{children}</ConditionalLayout>
          </ThemeRegistry>
        </ReactQueryRegistry>
        <GoogleTagManger.BodyTag />
      </body>
    </html>
  );
}
