import { createContext } from "react";
import { TODOS } from "src/providers/TodosProvider";

const TodosContext = createContext(TODOS)

export default TodosContext
