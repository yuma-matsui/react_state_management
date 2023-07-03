import type { NextPage } from "next";
import Todo from "../types/todo";
import { useTodosContext, useTodosDispatchContext } from "src/hooks";

const Home: NextPage = () => {
  const todos = useTodosContext()
  const { toggleIsDone } = useTodosDispatchContext()

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
              onChange={() => toggleIsDone(todo.id)}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Home;
