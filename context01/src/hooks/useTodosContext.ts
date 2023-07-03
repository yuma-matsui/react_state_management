import { useContext } from "react";
import TodosContext from "src/context/TodosContext";

const useTodosContext = () => useContext(TodosContext)

export default useTodosContext
