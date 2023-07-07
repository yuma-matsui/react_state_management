import Todo from "src/types/todo";

export type UsersState = {
  users: any[]
  fetchUsers: () => Promise<void>
}

export type TodoState = {
  todos: Todo[];
  addTodo: (text: Todo["text"]) => void;
  toggleTodo: (id: Todo["id"]) => void;
}

export type State = UsersState & TodoState
