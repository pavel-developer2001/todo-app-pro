import type { Preview } from "@storybook/react"
import TailwindCssProvider from '../src/shared/config/TailwindCssProvider/TailwindCssProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators:[
    TailwindCssProvider
  ]
}

export default preview
