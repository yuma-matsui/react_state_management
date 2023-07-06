import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsDone } from "src/state/todos";
import RootState from "src/types/rootState";

const Home: NextPage = () => {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

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
              onChange={() => dispatch(toggleIsDone({ id: todo.id }))}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Home;
