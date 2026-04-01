import { useState, useEffect } from 'react'
import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import { Button } from '@/components/ui/button'

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'register'>('login')

  // Log window current path to handle simple link navigation in this demo
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname
      if (path === '/register') setCurrentPage('register')
      else if (path === '/login') setCurrentPage('login')
    }
    
    // Simplistic mock router logic for preview
    const originalPushState = window.history.pushState
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args)
      handleLocationChange()
    }

    const originalReplaceState = window.history.replaceState
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(this, args)
      handleLocationChange()
    }

    window.addEventListener('popstate', handleLocationChange)
    
    // Catch link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        e.preventDefault()
        const href = anchor.getAttribute('href')!
        window.history.pushState({}, '', href)
      }
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <div className="relative">
      {/* Dev Navigation Switcher */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 bg-background/80 backdrop-blur border p-2 rounded-full shadow-xl">
        <Button 
          variant={currentPage === 'login' ? 'default' : 'ghost'} 
          size="sm" 
          onClick={() => {
            window.history.pushState({}, '', '/login')
            setCurrentPage('login')
          }}
          className="rounded-full"
        >
          Login View
        </Button>
        <Button 
          variant={currentPage === 'register' ? 'default' : 'ghost'} 
          size="sm"
          onClick={() => {
            window.history.pushState({}, '', '/register')
            setCurrentPage('register')
          }}
          className="rounded-full"
        >
          Register View
        </Button>
      </div>

      {currentPage === 'login' ? <LoginPage /> : <RegisterPage />}
    </div>
  )
}

export default App
