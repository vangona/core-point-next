import React from 'react';
import '@/app/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { Noto_Sans_KR } from 'next/font/google';
import { GeneralLayout } from '@/components/layout/general-layout';
import type { Metadata } from 'next';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '코어창업',
  description: '열쇠가 되겠습니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme();

  return (
    <html lang='ko'>
      <body className={notoSansKr.className}>
        <ThemeProvider theme={theme}>
          <GeneralLayout>{children}</GeneralLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
