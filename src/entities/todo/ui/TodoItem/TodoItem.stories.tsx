import type { Meta, StoryObj } from "@storybook/react"
import { TodoItem } from "./TodoItem"
import StoreProvider from "@/shared/config/StoreProvider/StoreProvider"

const meta = {
  title: "entities/TodoItem",
  component: TodoItem,
} satisfies Meta<typeof TodoItem>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    todo: { id: "1", text: "hello", categoryId: "1" },
  },
}
Primary.decorators = [StoreProvider({})]
