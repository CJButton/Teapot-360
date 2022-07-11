import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { useState } from "react";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
