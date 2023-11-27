import React from 'react';
import '@/app/globals.css';
import { commonMetaData } from '../commonMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '코어창업 | 매물 정보',
  description: '코어창업 매물 정보',
  ...commonMetaData,
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
