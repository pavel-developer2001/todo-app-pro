import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { todoApi } from "@/entities/todo/model/todo.api"
import { categoryApi } from "@/entities/category/model/category.api"

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([todoApi.middleware, categoryApi.middleware]),
})

setupListeners(store.dispatch)
