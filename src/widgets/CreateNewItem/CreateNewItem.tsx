/* eslint-disable arrow-body-style */
import React from "react"

interface CreateNewItemProps {
  isError: boolean
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
    <form onSubmit={onCreate}>
      {isError && <div>Произошла ошибка!</div>}
      <input
        placeholder="enter name new category"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={value.length <= 4} type="submit">
        {isLoading ? "Loading" : "Create"}
      </button>
    </form>
  )
}
