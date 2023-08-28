import type { Meta, StoryObj } from "@storybook/react"
import { Typography } from "./Typography"

const meta = {
  title: "ui/Typography",
  component: Typography,
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const OnlyTitle: Story = {
  args: {
    title: "Title123",
  },
}

export const OnlyText: Story = {
  args: {
    text: "text123",
  },
}

export const TitleAndText: Story = {
  args: {
    title: "title123",
    text: "text123",
  },
}
