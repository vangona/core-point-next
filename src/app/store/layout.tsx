import React from 'react';
import '@/app/globals.css';
import Box from '@mui/material/Box';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '코어창업 | 매물 정보',
  description: '코어창업 매물 정보',
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: DEFAULT_LAYOUT_WIDTH,
        gap: 3,
      }}
    >
      {children}
    </Box>
  );
}
