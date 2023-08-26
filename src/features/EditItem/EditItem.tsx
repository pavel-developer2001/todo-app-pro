import React, { useState } from "react"

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
    <div style={{ display: "flex" }}>
      {isEdit ? (
        <>
          {isError && <div>Error</div>}
          <form onSubmit={onChangeItem}>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit">{isLoading ? "..." : "Обновить"}</button>
            <button onClick={() => setIsEdit(false)}>Отмена</button>
          </form>
        </>
      ) : (
        <>
          <p>{value}</p>
          <div>
            <button
              onClick={() => {
                setIsEdit(true)
                setValue(value)
              }}
            >
              Редактировать
            </button>
            <button onClick={onDeleteItem}>Удалить</button>
          </div>
        </>
      )}
    </div>
  )
}
