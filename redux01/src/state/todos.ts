import { Reducer } from "redux"
import addTodo from "src/actions/addTodo"
import toggleIsDone from "src/actions/toggleIsDone"
import Todo from "src/types/todo"

type Action = ReturnType<typeof addTodo.action | typeof toggleIsDone.action>

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true }
]

export const todosReducer: Reducer<Todo[], Action> = (
  state = TODOS,
  action
) => {
  switch (action.type) {
    case addTodo.type: {
      const newTodo = { id: state.length + 1, text: action.payload.text, isDone: false }
      return [...state, newTodo]
    }
    case toggleIsDone.type: {
      return state.map(todo => {
        if (todo.id === action.payload.id) return { ...todo, isDone: !todo.isDone }
        return todo
      })
    }
    default: {
      return state
    }
  }
}
