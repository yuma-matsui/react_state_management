import { StateCreator } from "zustand"
import { State, UsersState } from "./types"


const createUsersSlice: StateCreator<State, [["zustand/devtools", never], ["zustand/immer", never]], [], UsersState> = (set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    set({ users: await response.json() }, false, "users/fetchUsers")
  }
})

export default createUsersSlice
