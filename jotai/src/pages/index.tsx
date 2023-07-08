import type { NextPage } from "next";
import { useAtom } from "jotai";
import { toggleTodoAtom } from "src/state/todos";

const Home: NextPage = () => {
  const [todos, toggleTodos] = useAtom(toggleTodoAtom)

  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map(todo => (
        <div key={todo.id}>
          <label style={{ fontSize: '2rem' }}>
            <input
              type="checkbox"
              style={{ width: '1.5rem', height: '1.5rem' }}
              checked={todo.isDone}
              onChange={() => toggleTodos(todo.id)}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Home;
