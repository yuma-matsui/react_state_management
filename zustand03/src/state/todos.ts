import Todo from "src/types/todo";
import { StateCreator } from "zustand";
import { State, TodoState } from "./types";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true }
]

const createTodosSlice: StateCreator<State, [["zustand/devtools", never], ["zustand/immer", never]], [], TodoState> = (set) => ({
  todos: TODOS,
  addTodo: (text) => {
    set((state) => {
      state.todos.push({ id: state.todos.length + 1, text, isDone: false })
    }, false, "todos/addTodo")
  },
  toggleTodo: (id) => {
    set((state) => {
      state.todos.forEach(todo => {
        if (todo.id === id) todo.isDone = !todo.isDone
      })
    }, false, "todos/toggleTodo")
  }
})

export default createTodosSlice
