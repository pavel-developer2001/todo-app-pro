import type { Meta, StoryObj } from "@storybook/react"
import StoreProvider from "@/shared/config/StoreProvider/StoreProvider"
import { TodoList } from "./TodoList"

const meta = {
  title: "widgets/TodoList",
  component: TodoList,
  decorators: [StoreProvider],
} satisfies Meta<typeof TodoList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    todos: [
      { id: "1", text: "hello", categoryId: "1" },
      { id: "2", text: "hello2", categoryId: "1" },
      { id: "3", text: "hello3", categoryId: "1" },
      { id: "4", text: "hello4", categoryId: "1" },
    ],
  },
}
