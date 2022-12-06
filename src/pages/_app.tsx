import 'swiper/css/pagination';
import 'swiper/css';
import { useState } from 'react';
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react';

import { GlobalStyle } from '../styles/global';
import Navigation from '../components/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const queryClient = new QueryClient()

  return (
    <>

      <SessionContextProvider supabaseClient={supabaseClient}>

        <QueryClientProvider client={queryClient}>

          <GlobalStyle />

          <Navigation />

          <Component {...pageProps} />

        </QueryClientProvider>

      </SessionContextProvider>

    </>
  )
}
