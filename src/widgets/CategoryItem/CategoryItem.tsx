import React, { useState } from "react"
import {
  CreateTodo,
  TodoList,
  useDeleteTodosByCategoryMutation,
  useGetTodosByCategoryQuery,
} from "@/entities/todo"

import { EditItem } from "@/features/EditItem/EditItem"
import {
  ICategory,
  useDeleteCategoryMutation,
  useUpdateCategoryTitleMutation,
} from "@/entities/category"
import { Block } from "@/shared/ui/Block/Block"

export const CategoryItem = ({ category }: { category: ICategory }) => {
  const [deleteTodosByCategory] = useDeleteTodosByCategoryMutation()
  const [deleteCategory] = useDeleteCategoryMutation()
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
  const updateCategoryItem = {
    id: category.id,
    title: categoryName,
  }

  const onDeleteCategory = async () => {
    await deleteTodosByCategory(category.id)
    await deleteCategory(category.id)
  }

  return (
    <Block>
      <EditItem
        value={categoryName}
        onDeleteItem={onDeleteCategory}
        isError={isError}
        isLoading={isLoading}
        item={updateCategoryItem}
        setValue={setCategoryName}
        updateItem={updateCategory}
      />
      <CreateTodo categoryId={category.id} />
      <TodoList todos={todos} />
    </Block>
  )
}
