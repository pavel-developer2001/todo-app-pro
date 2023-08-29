import React from "react"
import {
  CategoryItem,
  ICategory,
  useGetCategoriesQuery,
} from "@/entities/category"
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
      {data!.map((category: ICategory) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Flex>
  )
}
