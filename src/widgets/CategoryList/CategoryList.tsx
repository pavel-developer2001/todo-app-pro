import React from "react"
import { CategoryItem, useGetCategoriesQuery } from "@/entities/category"
import { Flex } from "@/shared/ui/Flex/Flex"

export const CategoryList = () => {
  const { data, isLoading, error } = useGetCategoriesQuery("")

  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>error</div>
  }
  return (
    <Flex className="flex-wrap justify-center">
      {data!.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Flex>
  )
}
