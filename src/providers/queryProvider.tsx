import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';

// const queryClient = new QueryClient();

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const [client] = useState(new QueryClient())
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};