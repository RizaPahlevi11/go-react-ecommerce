import React from "react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-extrabold text-xl font-manrope italic">G</span>
      </div>
      <span className="font-manrope font-bold text-2xl tracking-tighter text-foreground">
        GO<span className="text-secondary">RE</span>
      </span>
    </div>
  )
}
