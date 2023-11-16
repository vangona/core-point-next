'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { GeneralLayout } from '@/components/layout/general-layout';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}
const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
  const pathname = usePathname();
  if (pathname !== '/admin') {
    return <GeneralLayout>{children}</GeneralLayout>;
  } else {
    return children;
  }
};

export default ConditionalLayout;
