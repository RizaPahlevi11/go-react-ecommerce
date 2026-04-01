import React from "react"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-background font-inter">
      {/* Visual Side (Hidden on Mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-primary relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-md text-white text-center">
          <h1 className="text-5xl font-manrope font-extrabold mb-6 leading-tight tracking-tight">
            Curated Excellence for Your Lifestyle.
          </h1>
          <p className="text-primary-foreground/80 text-lg font-medium">
            Join the collective of discerning collectors and trendsetters.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-24 overflow-y-auto">
        <div className="w-full max-w-md space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-manrope font-extrabold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="text-muted-foreground font-medium text-lg">
              {subtitle}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
