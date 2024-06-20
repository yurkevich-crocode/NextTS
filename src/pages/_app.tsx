import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import store from "@/store/store";
import { Provider } from "react-redux";
import Notification from "@/components/Notification";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "@/components/Loading";
import { persistStore } from "redux-persist";
import { Router } from "next/router";
import HeadWrapper from "@/components/HeadWrapper";

export default function App({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <Provider store={store}>
      <HeadWrapper title={"NextJs"} />

      <PersistGate loading={<Loading />} persistor={persistor}>
        {loading ? (
          <Loading />
        ) : (
          <div className={`${inter.className}`}>
            <Header categories={pageProps.categories} />
            <Component {...pageProps} />
            <Notification />
          </div>
        )}
      </PersistGate>
    </Provider>
  );
}
