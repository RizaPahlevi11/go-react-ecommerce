import React from "react"
import { AuthLayout } from "@/components/organisms/AuthLayout"
import { LoginForm } from "@/components/organisms/LoginForm"

const LoginPage: React.FC = () => {
  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Sign in to your account to continue curating your legacy."
    >
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage
