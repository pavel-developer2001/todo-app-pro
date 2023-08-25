import { nanoid } from "@reduxjs/toolkit"
import React, { useState } from "react"
import { useCreateTodoMutation } from "../../model/todo.api"

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
    <form onSubmit={onCreate}>
      {isError && <div>Произошла ошибка!</div>}
      <input
        placeholder="Enter New Todo"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button disabled={todoName.length <= 4} type="submit">
        {isLoading ? "Loading" : "Create"}
      </button>
    </form>
  )
}
