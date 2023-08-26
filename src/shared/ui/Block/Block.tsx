import React from "react"

interface BlockProps {
  children: React.ReactNode
}

export const Block = ({ children }: BlockProps) => {
  return <div className="block">{children}</div>
}
