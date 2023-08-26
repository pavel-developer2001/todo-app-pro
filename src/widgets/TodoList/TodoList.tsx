import React from "react"
import { ITodo, TodoItem } from "@/entities/todo"
import { Block } from "@/shared/ui/Block/Block"

export const TodoList = ({ todos }: { todos: ITodo[] }) => {
  return (
    <Block className="my-1">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Block>
  )
}
