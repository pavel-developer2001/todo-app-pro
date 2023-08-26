import React from "react"
import { MdAdd } from "react-icons/md"
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
  dataTestIdInput?: string
  dataTestIdButton?: string
  stylesForForm?: string
  title?: string
}

export const CreateNewItem = ({
  isError,
  onCreate,
  value,
  setValue,
  isLoading,
  dataTestIdInput,
  dataTestIdButton,
  stylesForForm,
  title,
}: CreateNewItemProps) => {
  return (
    <Form onSubmit={onCreate} className={stylesForForm}>
      {isError && <div>Произошла ошибка!</div>}
      <TextField
        data-testid={dataTestIdInput}
        placeholder={title}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        className="ml-2"
        data-testid={dataTestIdButton}
        disabled={value.length <= 4}
        type="submit"
      >
        {isLoading ? "..." : <MdAdd />}
      </Button>
    </Form>
  )
}
