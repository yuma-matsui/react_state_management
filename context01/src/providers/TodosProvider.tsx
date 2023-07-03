import { FC, ReactNode, useState } from "react"
import TodosContext from "src/context/TodosContext"
import Todo from "src/types/todo"

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true }
]

type Props = {
  children: ReactNode
}

const TodosProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS)

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider
