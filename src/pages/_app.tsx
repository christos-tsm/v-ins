import "swiper/css/pagination";
import "swiper/css";
import "nprogress/nprogress.css";

import { useState, useEffect } from "react";
import Router from "next/router";
import { Scrollbars } from "rc-scrollbars";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import NProgress from "nprogress";

import type { AppProps } from "next/app";

import { GlobalStyle } from "../styles/global";
import Navigation from "../components/Navigation";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient());
    const queryClient = new QueryClient();

    useEffect(() => {
        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();

        Router.events.on("routeChangeStart", handleRouteStart);
        Router.events.on("routeChangeComplete", handleRouteDone);
        Router.events.on("routeChangeError", handleRouteDone);

        return () => {
            // Make sure to remove the event handler on unmount!
            Router.events.off("routeChangeStart", handleRouteStart);
            Router.events.off("routeChangeComplete", handleRouteDone);
            Router.events.off("routeChangeError", handleRouteDone);
        };
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <SessionContextProvider supabaseClient={supabaseClient}>
                <QueryClientProvider client={queryClient}>
                    <GlobalStyle />
                    <Scrollbars style={{ height: "100vh" }} universal>
                        <Component {...pageProps} />
                    </Scrollbars>
                </QueryClientProvider>
            </SessionContextProvider>
        </>
    );
}
