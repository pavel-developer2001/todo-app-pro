import React from "react"
import { ITodo, TodoItem } from "@/entities/todo"

export const TodoList = ({ todos }: { todos: ITodo[] }) =>
  todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
