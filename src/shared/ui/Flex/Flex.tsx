import React from "react"

interface FlexProps {
  children: React.ReactNode
}

export const Flex = ({ children }: FlexProps) => {
  return <div className="flex">{children}</div>
}
