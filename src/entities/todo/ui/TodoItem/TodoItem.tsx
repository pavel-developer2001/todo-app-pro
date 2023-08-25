import React, { useState } from "react"
import { ITodo } from "../../model/todo.types"
import {
  useDeleteTodoMutation,
  useUpdateTodoTextMutation,
} from "../../model/todo.api"

export const TodoItem = ({ todo }: { todo: ITodo }) => {
  const [deleteTodo] = useDeleteTodoMutation()
  const [isEdit, setIsEdit] = useState(false)
  const [textTodo, setTextTodo] = useState(todo.text)
  const [updateTodo, { isLoading, isError }] = useUpdateTodoTextMutation()
  const onDeleteTodo = () => {
    deleteTodo(todo.id)
  }
  const onUpdateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const updateTodoItem = {
      id: todo.id,
      categoryId: todo.categoryId,
      text: textTodo,
    }
    await updateTodo(updateTodoItem)
    setIsEdit(false)
  }
  return (
    <div style={{ display: "flex" }}>
      {isEdit ? (
        <>
          <form onSubmit={onUpdateTodo}>
            <input
              value={textTodo}
              onChange={(e) => setTextTodo(e.target.value)}
            />
            <button type="submit">{isLoading ? "Loading" : "Обновить"}</button>
            <button onClick={() => setIsEdit(false)}>Отменить</button>
          </form>
        </>
      ) : (
        <>
          <div>{todo.text}</div>
          <div>
            <button onClick={() => setIsEdit(true)}>Редактировать</button>
            <button onClick={onDeleteTodo}>Удалить</button>
          </div>
        </>
      )}
    </div>
  )
}
