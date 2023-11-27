import React from 'react';
import { Metadata } from 'next';
import { commonMetaData } from '../commonMetaData';

export const metadata: Metadata = {
  title: '코어창업 | 협업 신청',
  description: '코어창업 협업 브랜드 신청',
  ...commonMetaData,
};

interface PartnershipLayoutProps {
  children: React.ReactNode;
}
const PartnershipLayout = ({ children }: PartnershipLayoutProps) => {
  return children;
};

export default PartnershipLayout;
