import React from "react"
import { CreateCategory } from "@/entities/category"
import { CategoryList } from "@/widgets/CategoryList/CategoryList"

export const App = () => {
  return (
    <main>
      <CreateCategory />
      <CategoryList />
    </main>
  )
}
