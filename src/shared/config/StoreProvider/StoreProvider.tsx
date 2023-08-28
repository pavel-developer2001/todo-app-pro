import React from "react"
import { Provider } from "react-redux"
import { store } from "@/app/store/store"

const StoreProvider = (Story: any) => (
  <Provider store={store}>
    <Story />
  </Provider>
)

export default StoreProvider
