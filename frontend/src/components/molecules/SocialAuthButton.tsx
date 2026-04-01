import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SocialAuthButtonProps {
  icon: React.ReactNode
  provider: string
  onClick?: () => void
  className?: string
}

export const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  icon,
  provider,
  onClick,
  className,
}) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-center gap-3 h-12 font-medium text-sm border-muted-foreground/20 hover:bg-muted/50 transition-colors bg-background",
        className
      )}
    >
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      Continue with {provider}
    </Button>
  )
}
