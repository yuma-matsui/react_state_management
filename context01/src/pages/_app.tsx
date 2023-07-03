import type { AppProps } from "next/app";
import Header from "src/components/Header";
import TodosProvider from "src/providers/TodosProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <TodosProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </TodosProvider>
  );
}
