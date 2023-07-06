import { FC } from "react";
import { useSelector } from "react-redux";
import RootState from "src/types/rootState";

const TodoCounter: FC = () => {
  const todoCount = useSelector((state: RootState) => state.todos.length)
  return <h2>TODO: {todoCount}件</h2>
}

export default TodoCounter
