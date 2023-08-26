import React, { useState } from "react"
import { MdModeEdit, MdDelete, MdCancel, MdCheck } from "react-icons/md"
import { Button } from "@/shared/ui/Button/Button"
import { Form } from "@/shared/ui/Form/Form"
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
    <>
      {isEdit ? (
        <>
          {isError && <div>Error</div>}
          <Form onSubmit={onChangeItem} className="flex justify-between">
            <input
              value={value}
              className="px-0 py-0 rounded-none border-none min-w-[83%] focus:outline-none "
              onChange={(e) => setValue(e.target.value)}
            />
            <Flex>
              <Button type="submit">
                {isLoading ? "..." : <MdCheck className="text-2xl" />}
              </Button>
              <Button onClick={() => setIsEdit(false)}>
                <MdCancel className="text-2xl" />
              </Button>
            </Flex>
          </Form>
        </>
      ) : (
        <Flex className="justify-between">
          <Typography text={value} stylesForText="rounded-lg" />
          <Flex>
            <Button
              onClick={() => {
                setIsEdit(true)
                setValue(value)
              }}
            >
              <MdModeEdit className="text-2xl" />
            </Button>
            <Button onClick={onDeleteItem}>
              <MdDelete className="text-2xl" />
            </Button>
          </Flex>
        </Flex>
      )}
    </>
  )
}
