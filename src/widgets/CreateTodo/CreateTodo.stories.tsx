import type { Meta, StoryObj } from "@storybook/react"
import StoreProvider from "@/shared/config/StoreProvider/StoreProvider"
import { CreateTodo } from "./CreateTodo"

const meta = {
  title: "widgets/CreateTodo",
  component: CreateTodo,
  decorators: [StoreProvider],
} satisfies Meta<typeof CreateTodo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    categoryId: "1",
  },
}
