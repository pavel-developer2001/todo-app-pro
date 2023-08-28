import type { Meta, StoryObj } from "@storybook/react"
import StoreProvider from "@/shared/config/StoreProvider/StoreProvider"
import { CategoryItem } from "./CategoryItem"

const meta = {
  title: "widgets/CategoryItem",
  component: CategoryItem,
  decorators: [StoreProvider],
} satisfies Meta<typeof CategoryItem>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    category: { id: "1", title: "category1" },
  },
}
