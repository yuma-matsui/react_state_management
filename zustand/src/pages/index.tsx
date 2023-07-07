import type { NextPage } from "next";
import useStore from "src/state/todos";

const Home: NextPage = () => {
  const { todos, toggleTodo } = useStore((state) => state)

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
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Home;
