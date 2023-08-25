import React from "react"
import { ITodo, TodoItem } from "@/entities/todo"

export const TodoList = ({ todos }: { todos: ITodo[] }) => (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
