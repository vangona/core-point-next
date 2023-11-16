'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface ReactQueryRegistryProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
const ReactQueryRegistry = ({ children }: ReactQueryRegistryProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryRegistry;
