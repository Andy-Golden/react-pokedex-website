import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 30,
      cacheTime: 1000 * 30,
      refetchOnWindowFocus: false,
      suspense: false,
    },
  },
});

export { queryClient };
