import type { Meta, StoryObj } from "@storybook/react"
import { Flex } from "./Flex"
import { Typography } from "../Typography/Typography"

const meta = {
  title: "ui/Flex",
  component: Flex,
} satisfies Meta<typeof Flex>

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
