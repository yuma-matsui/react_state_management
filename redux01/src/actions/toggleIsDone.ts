import Todo from "src/types/todo"

const type = "TOGGLE_IS_DONE" as const

const action = (id: Todo["id"]) => {
  return { type, payload: { id } } as const
}

const toggleIsDone = {
  type,
  action
}

export default toggleIsDone
