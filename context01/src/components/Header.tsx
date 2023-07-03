import Link from "next/link";
import { FC } from "react";
import useTodosContext from "src/hooks/useTodosContext";

const Header: FC = () => {
  const { todos } = useTodosContext()
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
