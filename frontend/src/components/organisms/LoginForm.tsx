import React from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AuthFormField } from "@/components/molecules/AuthFormField"
import { SocialAuthButton } from "@/components/molecules/SocialAuthButton"
import { Globe } from "lucide-react"

export const LoginForm: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-4">
        <AuthFormField 
          label="Email Address" 
          placeholder="name@example.com" 
          type="email" 
          id="email-login"
        />
        <div className="space-y-2">
          <AuthFormField 
            label="Password" 
            placeholder="••••••••" 
            type="password" 
            id="password-login"
          />
          <div className="flex justify-end">
            <a href="#" className="text-xs font-semibold text-primary hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="text-sm font-medium leading-none cursor-pointer">
          Keep me logged in for 30 days
        </Label>
      </div>

      <Button className="w-full h-14 text-base font-bold tracking-wide rounded-lg bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
        Sign In to Portal
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-muted" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-4 text-muted-foreground font-semibold tracking-widest">
            Or continue with
          </span>
        </div>
      </div>

      <SocialAuthButton 
        provider="Google" 
        icon={<Globe className="w-4 h-4" />} 
      />

      <p className="text-center text-sm text-muted-foreground">
        New here?{" "}
        <a href="/register" className="font-bold text-foreground hover:text-primary transition-colors">
          Create an account
        </a>
      </p>
    </div>
  )
}
