import { createContext } from "react";
import Props from "src/types/props";

const TodosContext = createContext<Props>({
  todos: [],
  setTodos: () => {
    throw Error('No default value!')
  }
})

export default TodosContext
