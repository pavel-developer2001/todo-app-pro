import React from "react"

interface TypographyProps {
  title?: string
  text?: string
  stylesForTitle?: string
  stylesForText?: string
}

export const Typography = ({
  title,
  text,
  stylesForTitle,
  stylesForText,
}: TypographyProps) => {
  return (
    <>
      {title && <h1 className={stylesForTitle}>{title}</h1>}
      {text && <p className={stylesForText}>{text}</p>}
    </>
  )
}
