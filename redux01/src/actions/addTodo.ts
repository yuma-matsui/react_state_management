import Todo from "src/types/todo"

const type = "ADD_TODO" as const

const action = (text: Todo["text"]) => {
  return { type, payload: { text } } as const
}

const addTodo = {
  type,
  action
}

export default addTodo
