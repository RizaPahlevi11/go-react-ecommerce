import React from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AuthFormField } from "@/components/molecules/AuthFormField"
import { SocialAuthButton } from "@/components/molecules/SocialAuthButton"
import { Globe } from "lucide-react"

export const RegisterForm: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AuthFormField 
          label="First Name" 
          placeholder="Jane" 
          type="text" 
          id="first-name"
        />
        <AuthFormField 
          label="Last Name" 
          placeholder="Doe" 
          type="text" 
          id="last-name"
        />
      </div>

      <AuthFormField 
        label="Email Address" 
        placeholder="name@example.com" 
        type="email" 
        id="email-register"
      />
      
      <AuthFormField 
        label="Password" 
        placeholder="••••••••" 
        type="password" 
        id="password-register"
      />

      <div className="flex items-start space-x-2">
        <Checkbox id="terms" className="mt-1" />
        <Label htmlFor="terms" className="text-sm font-medium leading-relaxed cursor-pointer text-muted-foreground">
          I agree to the <a href="#" className="font-bold text-foreground hover:underline">Terms of Service</a> and <a href="#" className="font-bold text-foreground hover:underline">Privacy Policy</a>.
        </Label>
      </div>

      <Button className="w-full h-14 text-base font-bold tracking-wide rounded-lg bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
        Create Your Account
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-muted" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-4 text-muted-foreground font-semibold tracking-widest">
            Sign up faster with
          </span>
        </div>
      </div>

      <SocialAuthButton 
        provider="Google" 
        icon={<Globe className="w-4 h-4" />} 
      />

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <a href="/login" className="font-bold text-foreground hover:text-primary transition-colors">
          Sign in instead
        </a>
      </p>
    </div>
  )
}
