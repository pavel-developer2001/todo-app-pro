import type { Meta, StoryObj } from "@storybook/react"
import StoreProvider from "@/shared/config/StoreProvider/StoreProvider"
import { CategoryList } from "./CategoryList"


const meta = {
  title: "widgets/CategoryList",
  component: CategoryList,
  decorators: [StoreProvider],
} satisfies Meta<typeof CategoryList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    categoryId: "1",
  },
}
