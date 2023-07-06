import type { AppProps } from "next/app";
import Todo from "../types/todo";
import Layout from "src/components/Layout";
import { Provider } from "react-redux";
import store from "src/state";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true }
]

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
