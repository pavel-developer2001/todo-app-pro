import type { Meta, StoryObj } from "@storybook/react"
import StoreProvider from "@/shared/config/StoreProvider/StoreProvider"
import { CreateCategory } from "./CreateCategory"

const meta = {
  title: "widgets/CreateCategory",
  component: CreateCategory,
  decorators: [StoreProvider],
} satisfies Meta<typeof CreateCategory>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
