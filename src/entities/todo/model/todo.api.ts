import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodosByCategory: builder.query({
      query: (categoryId) => `/todos?categoryId=${categoryId}`,
      providesTags: (result) =>
        result
          ? //@ts-ignore
            [...result.map(({ id }) => ({ type: "Todo", id })), "Todo"]
          : ["Todo"],
    }),
    createTodo: builder.mutation({
      query: (body) => ({ url: "/todos", method: "POST", body }),
      invalidatesTags: [{ type: "Todo" }],
    }),
    deleteTodosByCategory: builder.mutation({
      query: (id) => ({
        url: `/todos?categoryId=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Todo" }],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Todo" }],
    }),
    updateTodoText: builder.mutation({
      query: (body) => ({
        url: `/todos/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Todo" }],
    }),
  }),
})

export const {
  useGetTodosByCategoryQuery,
  useDeleteTodosByCategoryMutation,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoTextMutation,
} = todoApi
