import React from "react"

import { Preview } from "@storybook/react"
import { Provider } from "react-redux"

const StoreProvider: Preview = {
  decorators: [
    (Story) => (
      //@ts-ignore
      <Provider store={{}}>
        <Story />
      </Provider>
    ),
  ],
}

export default StoreProvider
