import { FC } from "react";
import { store } from "src/state/todos";
import { useSnapshot } from "valtio";

const TodoCounter: FC = () => {
  const { todos } = useSnapshot(store);
  return <h2>TODO: {todos.length}件</h2>;
};

export default TodoCounter;
