import React, { useState } from "react"
import { ITodo } from "../../entities/todo/model/todo.types"
import {
  useDeleteTodoMutation,
  useUpdateTodoTextMutation,
} from "../../entities/todo"
import { EditItem } from "@/features/EditItem/EditItem"

export const TodoItem = ({ todo }: { todo: ITodo }) => {
  const [deleteTodo] = useDeleteTodoMutation()
  const [textTodo, setTextTodo] = useState(todo.text)
  const [updateTodo, { isLoading, isError }] = useUpdateTodoTextMutation()
  const onDeleteTodo = async () => {
    await deleteTodo(todo.id)
  }
  const updateTodoItem = {
    id: todo.id,
    categoryId: todo.categoryId,
    text: textTodo,
  }
  return (
    <EditItem
      isError={isError}
      isLoading={isLoading}
      onDeleteItem={onDeleteTodo}
      item={updateTodoItem}
      setValue={setTextTodo}
      updateItem={updateTodo}
      value={textTodo}
    />
  )
}
