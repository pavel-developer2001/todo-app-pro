import React from "react"

interface BlockProps {
  children: React.ReactNode
  className?: string
}

export const Block = ({ children, className = "" }: BlockProps) => {
  return <div className={`block ${className}`}>{children}</div>
}
