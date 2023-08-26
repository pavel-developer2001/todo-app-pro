import { nanoid } from "@reduxjs/toolkit"
import React, { useState } from "react"
import { useCreateTodoMutation } from "../../entities/todo"
import { CreateNewItem } from "@/features/CreateNewItem/CreateNewItem"

export const CreateTodo = ({ categoryId }: { categoryId: string }) => {
  const [todoName, setTodoName] = useState("")
  const [createTodo, { isLoading, isError }] = useCreateTodoMutation()
  const onCreate: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const newTodo = {
      id: nanoid(),
      text: todoName,
      categoryId,
    }
    await createTodo(newTodo)
    setTodoName("")
  }
  return (
    <CreateNewItem
      onCreate={onCreate}
      isError={isError}
      isLoading={isLoading}
      setValue={setTodoName}
      value={todoName}
    />
  )
}
