import React from 'react';
import { Metadata } from 'next';
import { commonMetaData } from '@/app/commonMetaData';

interface OpeningLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: '코어창업 | 창업 컨설팅',
  description: '코어창업 창업 컨설팅 신청',
  ...commonMetaData,
};

const OpeningLayout = ({ children }: OpeningLayoutProps) => {
  return children;
};

export default OpeningLayout;
