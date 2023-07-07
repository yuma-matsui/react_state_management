import { FC } from "react";
import { useRecoilValue } from "recoil";
import { todosLengthState } from "src/state/todos";

const TodoCounter: FC = () => {
  const todoCount = useRecoilValue(todosLengthState)
  return <h2>TODO: {todoCount}件</h2>
}

export default TodoCounter
