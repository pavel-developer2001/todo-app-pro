import type { Meta, StoryObj } from "@storybook/react"

import { Typography } from "../Typography/Typography"
import { Block } from "./Block"

const meta = {
  title: "ui/Block",
  component: Block,
} satisfies Meta<typeof Block>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <>
        <Typography title="title" />
        <Typography text="text" />
      </>
    ),
  },
}
