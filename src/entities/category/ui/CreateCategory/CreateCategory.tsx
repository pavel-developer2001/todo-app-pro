import { nanoid } from "@reduxjs/toolkit"
import React, { useState } from "react"
import { useCreateCategoryMutation } from "../../model/category.api"
import { CreateNewItem } from "@/widgets/CreateNewItem/CreateNewItem"

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
      onCreate={onCreate}
      isError={isError}
      setValue={setCategoryName}
      value={categoryName}
      isLoading={isLoading}
    />
  )
}
