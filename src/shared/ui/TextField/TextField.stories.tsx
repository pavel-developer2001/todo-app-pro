import type { Meta, StoryObj } from "@storybook/react"
import { TextField } from "./TextField"

const meta = {
  title: "ui/TextField",
  component: TextField,
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
