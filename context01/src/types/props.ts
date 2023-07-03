import { Dispatch, SetStateAction } from "react";
import Todo from "./todo";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export default Props
