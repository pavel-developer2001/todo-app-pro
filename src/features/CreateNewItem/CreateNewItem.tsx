import React from "react"
import { Button } from "@/shared/ui/Button/Button"
import { TextField } from "@/shared/ui/TextField/TextField"
import { Form } from "@/shared/ui/Form/Form"

interface CreateNewItemProps {
  isError: boolean
  // eslint-disable-next-line no-unused-vars
  onCreate: (e: React.FormEvent<HTMLFormElement>) => void
  value: string
  // eslint-disable-next-line no-unused-vars
  setValue: (arg: string) => void
  isLoading: boolean
}

export const CreateNewItem = ({
  isError,
  onCreate,
  value,
  setValue,
  isLoading,
}: CreateNewItemProps) => {
  return (
    <Form onSubmit={onCreate}>
      {isError && <div>Произошла ошибка!</div>}
      <TextField
        placeholder="enter name new category"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button disabled={value.length <= 4} type="submit">
        {isLoading ? "Loading" : "Create"}
      </Button>
    </Form>
  )
}
