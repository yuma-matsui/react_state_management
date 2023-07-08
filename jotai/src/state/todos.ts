import { atom } from "jotai";
import { selectAtom } from "jotai/utils";
import Todo from "src/types/todo";

export const todosAtom = atom<Todo[]>([
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true }
])

export const todosLengthAtom = selectAtom(todosAtom, todos => todos.length)

export const toggleTodoAtom = atom(
  get => get(todosAtom),
  (get, set, id: number) => {
    const prevTodos = get(todosAtom)
    const newTodos = prevTodos.map(todo => {
      if (todo.id === id) return { ...todo, isDone: !todo.isDone }
      return todo
    })
    set(todosAtom, newTodos)
  }
)

export const addTodoAtom = atom(
  null,
  (get, set, text: string) => {
    const prevTodos = get(todosAtom)
    const newTodo = { id: prevTodos.length + 1, text, isDone: false }
    const newTodos = [...prevTodos, newTodo]
    set(todosAtom, newTodos)
  }
)
