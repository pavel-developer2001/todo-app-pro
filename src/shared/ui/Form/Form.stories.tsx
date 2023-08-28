import type { Meta, StoryObj } from "@storybook/react"

import { Form } from "./Form"
import { TextField } from "../TextField/TextField"
import { Flex } from "../Flex/Flex"
import { Button } from "../Button/Button"

const meta = {
  title: "ui/Form",
  component: Form,
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <Flex>
        <TextField />
        <Button>Create</Button>
      </Flex>
    ),
  },
}
