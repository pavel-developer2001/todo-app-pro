import React from "react"

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextField = (props: TextFieldProps) => {
  return <input {...props} />
}
