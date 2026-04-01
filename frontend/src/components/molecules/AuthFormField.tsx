import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface AuthFormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  containerClassName?: string
}

export const AuthFormField: React.FC<AuthFormFieldProps> = ({
  label,
  error,
  containerClassName,
  className,
  id,
  ...props
}) => {
  return (
    <div className={cn("grid w-full items-center gap-1.5", containerClassName)}>
      <Label 
        htmlFor={id} 
        className={cn(
          "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
          error && "text-destructive"
        )}
      >
        {label}
      </Label>
      <Input
        id={id}
        className={cn(
          "bg-muted/50 border-none focus-visible:ring-primary focus-visible:bg-background transition-all duration-200",
          error && "ring-1 ring-destructive",
          className
        )}
        {...props}
      />
      {error && (
        <span className="text-[10px] font-medium text-destructive mt-0.5">
          {error}
        </span>
      )}
    </div>
  )
}
