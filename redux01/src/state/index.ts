import { combineReducers, legacy_createStore } from "redux"
import { todosReducer } from "./todos"

const store = legacy_createStore(combineReducers({
  todos: todosReducer
}))

export default store
