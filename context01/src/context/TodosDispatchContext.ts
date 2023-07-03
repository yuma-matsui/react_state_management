import { createContext } from "react";
import Todo from "src/types/todo";

const TodosDispatchContext = createContext<{
  toggleIsDone: (id: Todo["id"]) => void;
  addTodo: (text: Todo["text"]) => void;
}>({
  toggleIsDone: () => {
    throw Error('No default value!')
  },
  addTodo: () => {
    throw Error('No default value!')
  },
})

export default TodosDispatchContext

