import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Todo from "src/types/todo";

const initialState: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true }
]

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Pick<Todo, "text">>) => {
      state.push({
        id: state.length + 1,
        text: action.payload.text,
        isDone: false
      })
    },
    toggleIsDone: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      state.forEach(todo => {
        if (todo.id === action.payload.id) todo.isDone = !todo.isDone
      })
    }
  }
})

export const { reducer: todoReducer, actions: { addTodo, toggleIsDone} } = todosSlice
