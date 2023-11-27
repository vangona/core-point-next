import React from 'react';
import { Metadata } from 'next';

interface OpeningLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: '코어창업 | 창업 컨설팅',
  description: '코어창업 창업 컨설팅 신청',
  robots: 'index,follow',
  openGraph: {
    title: '코어창업',
    description:
      '코어창업 | 창업 컨설팅, 코어창업이 창업을 위한 열쇠가 되어드리겠습니다. 점포 창업 | 창업 컨설팅 | 양도 컨설팅 | 프랜차이즈 창업 | 프랜차이즈 협업',
    siteName: '코어창업',
    url: 'https://www.core-point.kr',
    type: 'website',
    images: { url: '/logo.png' },
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.core-point.kr',
  ),
};

const OpeningLayout = ({ children }: OpeningLayoutProps) => {
  return children;
};

export default OpeningLayout;
