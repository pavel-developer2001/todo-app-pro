import React, { useState } from "react"
import {
  CreateTodo,
  TodoList,
  useDeleteTodosByCategoryMutation,
  useGetTodosByCategoryQuery,
} from "@/entities/todo"
import { ICategory } from "../../model/category.types"
import {
  useDeleteCategoryMutation,
  useUpdateCategoryTitleMutation,
} from "../../model/category.api"

export const CategoryItem = ({ category }: { category: ICategory }) => {
  const [deleteTodosByCategory] = useDeleteTodosByCategoryMutation()
  const [deleteCategory] = useDeleteCategoryMutation()
  const [isEdit, setIsEdit] = useState(false)
  const [categoryName, setCategoryName] = useState(category.title)
  const {
    data: todos,
    isLoading: isLoadingTodos,
    error: errorTodo,
  } = useGetTodosByCategoryQuery(category.id)
  const [updateCategory, { isLoading, isError }] =
    useUpdateCategoryTitleMutation()

  if (isLoadingTodos) {
    return <div>loading...</div>
  }
  if (errorTodo) {
    return <div>{errorTodo}</div>
  }
  const onChangeCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const updateCategoryItem = {
      id: category.id,
      title: categoryName,
    }
    await updateCategory(updateCategoryItem)
    if (isError !== true) setIsEdit(false)
  }

  async function onDeleteCategory(): Promise<void> {
    await deleteTodosByCategory(category.id)
    await deleteCategory(category.id)
  }

  return (
    <main>
      <div style={{ display: "flex" }}>
        {isEdit ? (
          <>
            {isError && <div>Error</div>}
            <form onSubmit={onChangeCategory}>
              <input
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <button type="submit">{isLoading ? "..." : "Обновить"}</button>
              <button onClick={() => setIsEdit(false)}>Отмена</button>
            </form>
          </>
        ) : (
          <>
            <p className="bg-sky-800 rounded-lg text-cyan-100">
              {category.title}
            </p>
            <div>
              <button
                onClick={() => {
                  setIsEdit(true)
                  setCategoryName(category.title)
                }}
              >
                Редактировать
              </button>
              <button onClick={onDeleteCategory}>Удалить</button>
            </div>
          </>
        )}
      </div>
      <CreateTodo categoryId={category.id} />
      <TodoList todos={todos} />
    </main>
  )
}
