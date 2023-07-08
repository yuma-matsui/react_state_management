import type { AppProps } from "next/app";
import Layout from "src/components/Layout";
import { useAtom } from "jotai";
import { todosAtom } from "src/state/todos";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
