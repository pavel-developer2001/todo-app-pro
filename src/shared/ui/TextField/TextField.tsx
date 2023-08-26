import React from "react"

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const TextField = ({ className = "", ...props }: TextFieldProps) => {
  return (
    <input
      className={`px-5 py-3 border-2 border-indigo-600 rounded-lg ${className}`}
      {...props}
    />
  )
}
