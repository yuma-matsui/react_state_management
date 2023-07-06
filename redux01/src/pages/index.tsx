import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import RootState from "src/types/rootState";
import toggleIsDone from "src/actions/toggleIsDone";

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
              onChange={() => dispatch(toggleIsDone.action(todo.id))}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Home;
