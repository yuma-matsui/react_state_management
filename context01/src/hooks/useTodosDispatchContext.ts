import { useContext } from "react";
import TodosDispatchContext from "src/context/TodosDispatchContext";

const useTodosDispatchContext = () => useContext(TodosDispatchContext)

export default useTodosDispatchContext
