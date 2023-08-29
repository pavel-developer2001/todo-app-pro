import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { SERVER_API } from "@/shared/const/api"

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_API }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/categories`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: string }) => ({
                type: "Category",
                id,
              })),
              "Category",
            ]
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
