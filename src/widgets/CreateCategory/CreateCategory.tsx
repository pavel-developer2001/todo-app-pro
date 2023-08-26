import { nanoid } from "@reduxjs/toolkit"
import React, { useState } from "react"
import { useCreateCategoryMutation } from "../../entities/category"
import { CreateNewItem } from "@/features/CreateNewItem/CreateNewItem"

export const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("")
  const [createCategory, { isLoading, isError }] = useCreateCategoryMutation()
  const onCreate: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const newCategory = {
      id: nanoid(),
      title: categoryName,
    }
    await createCategory(newCategory)
    setCategoryName("")
  }
  return (
    <CreateNewItem
      title="Создать новую категорию"
      stylesForForm="flex justify-center my-7"
      dataTestIdInput="category-input"
      dataTestIdButton="category-btn"
      onCreate={onCreate}
      isError={isError}
      setValue={setCategoryName}
      value={categoryName}
      isLoading={isLoading}
    />
  )
}
