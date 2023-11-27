import React from 'react';
import { Metadata } from 'next';
import { commonMetaData } from '@/app/commonMetaData';

interface TransferLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: '코어창업 | 양도 컨설팅',
  description: '코어창업 양도 컨설팅 신청',
  ...commonMetaData,
};

const TransferLayout = ({ children }: TransferLayoutProps) => {
  return children;
};

export default TransferLayout;
