import React from "react"

interface TypographyProps {
  title?: string
  text?: string
}

export const Typography = ({ title, text }: TypographyProps) => {
  return (
    <>
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
    </>
  )
}
