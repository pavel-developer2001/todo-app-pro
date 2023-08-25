import { nanoid } from "@reduxjs/toolkit"
import React, { useState } from "react"
import { useCreateCategoryMutation } from "../../model/category.api"

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
    <form onSubmit={onCreate}>
      {isError && <div>Произошла ошибка!</div>}
      <input
        placeholder="enter name new category"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button disabled={categoryName.length <= 4} type="submit">
        {isLoading ? "Loading" : "Create"}
      </button>
    </form>
  )
}
