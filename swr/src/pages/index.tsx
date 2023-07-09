import type { NextPage } from "next";
import Todo from "../types/todo";
import Props from "src/types/props";
import useSWR from "swr";

const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  const json = await res.json();
  return json;
};

const Home: NextPage<Props> = ({ todos, setTodos }) => {
  const { data, error } = useSWR<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h3>TODO一覧</h3>
      {data.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              style={{ width: "1.5rem", height: "1.5rem" }}
              defaultChecked={todo.completed}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
