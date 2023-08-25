import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICategory } from "./category.types"

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], any>({
      query: () => `/categories`,
      //@ts-ignore
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Category", id })), "Category"]
          : ["Category"],
    }),
    createCategory: builder.mutation({
      query: (body) => ({ url: "/categories", method: "POST", body }),
      invalidatesTags: [{ type: "Category" }],
    }),
    updateCategoryTitle: builder.mutation({
      query: (body) => ({
        url: `/categories/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Category" }],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Category" }],
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryTitleMutation,
  useDeleteCategoryMutation,
} = categoryApi
