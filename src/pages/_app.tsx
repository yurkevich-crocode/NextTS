import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
import store from "@/store/store";
import { Provider } from "react-redux";
import Notification from "@/components/Notification";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "@/components/Loading";
import { persistStore } from "redux-persist";

export default function App({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <div className={`${inter.className}`}>
          <Header categories={pageProps.categories} />
          <Component {...pageProps} />
          <Notification />
        </div>
      </PersistGate>
    </Provider>
  );
}
