import React from "react"
import {
  CategoryItem,
  CreateCategory,
  useGetCategoriesQuery,
} from "@/entities/category"

export const App = () => {
  const { data, isLoading, error } = useGetCategoriesQuery("")

  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>{error.error}</div>
  }
  return (
    <>
      <CreateCategory />
      <main style={{ display: "flex", justifyContent: "space-around" }}>
        {data!.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </main>
    </>
  )
}
