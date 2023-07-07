import type { AppProps } from "next/app";
import { useState } from "react";
import Todo from "../types/todo";
import Layout from "src/components/Layout";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
