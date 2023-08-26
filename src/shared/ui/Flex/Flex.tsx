import React from "react"

interface FlexProps {
  children: React.ReactNode
  className?: string
}

export const Flex = ({ children, className = "" }: FlexProps) => {
  return <div className={`flex ${className}`}>{children}</div>
}
