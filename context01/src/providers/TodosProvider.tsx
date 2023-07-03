import { FC, ReactNode, useCallback, useMemo, useState } from "react"
import TodosContext from "src/context/TodosContext"
import TodosDispatchContext from "src/context/TodosDispatchContext"
import Todo from "src/types/todo"

export const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true }
]

type Props = {
  children: ReactNode
}

const TodosProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS)

  const addTodo = useCallback((text: Todo["text"]) => {
    setTodos(prevTodos => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false }
      return [
        ...prevTodos,
        newTodo
      ];
    });
  }, [])

  const toggleIsDone = useCallback((id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if (todo.id === id) return { ...todo, isDone: !todo.isDone }
        return todo
      })
    })
  }, [])

  const todosDispatchValue = useMemo(() => ({ toggleIsDone, addTodo }), [toggleIsDone, addTodo])

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={todosDispatchValue}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  )
}

export default TodosProvider
