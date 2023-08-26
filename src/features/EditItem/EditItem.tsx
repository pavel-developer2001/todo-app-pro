import React, { useState } from "react"
import { Button } from "@/shared/ui/Button/Button"
import { Form } from "@/shared/ui/Form/Form"
import { TextField } from "@/shared/ui/TextField/TextField"
import { Typography } from "@/shared/ui/Typography/Typography"
import { Flex } from "@/shared/ui/Flex/Flex"

interface EditItemProps {
  item: unknown
  // eslint-disable-next-line no-unused-vars
  updateItem: (arg: unknown) => void
  value: string
  // eslint-disable-next-line no-unused-vars
  setValue: (arg: string) => void
  isError: boolean
  isLoading: boolean
  onDeleteItem: () => Promise<void>
}

export const EditItem = ({
  item,
  updateItem,
  value,
  setValue,
  isError,
  isLoading,
  onDeleteItem,
}: EditItemProps) => {
  const [isEdit, setIsEdit] = useState(false)

  const onChangeItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await updateItem(item)
    if (isError !== true) setIsEdit(false)
  }

  return (
    <Flex>
      {isEdit ? (
        <>
          {isError && <div>Error</div>}
          <Form onSubmit={onChangeItem}>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button type="submit">{isLoading ? "..." : "Обновить"}</Button>
            <Button onClick={() => setIsEdit(false)}>Отмена</Button>
          </Form>
        </>
      ) : (
        <>
          <Typography text={value} />
          <Button
            onClick={() => {
              setIsEdit(true)
              setValue(value)
            }}
          >
            Редактировать
          </Button>
          <Button onClick={onDeleteItem}>Удалить</Button>
        </>
      )}
    </Flex>
  )
}
