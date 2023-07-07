import Link from "next/link";
import { FC } from "react";
import useStore from "src/state";

const Header: FC = () => {
  const todos = useStore(state => state.todos)
  return (
    <header>
      <nav>
        <h1>
          <Link href="/">
            <a>React状態管理</a>
          </Link>
        </h1>
        <Link href="/">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add">
          <a>TODO追加</a>
        </Link>
      </nav>
      <h2>TODO: {todos.length}件</h2>
    </header>
  );
}



export default Header
