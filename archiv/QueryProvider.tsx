"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function QueryProvider({ children }: PropsWithChildren) {
  const queryClient = new QueryClient({
    // if query fails -> retry 3 more times
    // default settings are valid for most apps, only staleTime should be overwritten >> do this in useQuery call (in useTodos.ts)
   /*  defaultOptions: {
      queries: {
        retry: 3,
        cacheTime: 300_0000, // 5 min
        staleTime: 10 * 1000, // revalidate every 10 seconds
        refetchOnWindowFocus: false, // default is true
        refetchOnReconnect: false, // default is true
        refetchOnMount: false, // default is true
      },
    }, */
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
