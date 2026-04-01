import React from "react"
import { AuthLayout } from "@/components/organisms/AuthLayout"
import { RegisterForm } from "@/components/organisms/RegisterForm"

const RegisterPage: React.FC = () => {
  return (
    <AuthLayout 
      title="Join the Collective" 
      subtitle="Create an account and start your editorial journey today."
    >
      <RegisterForm />
    </AuthLayout>
  )
}

export default RegisterPage
