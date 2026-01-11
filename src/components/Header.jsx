import { useState, useEffect } from 'react'
import { UtensilsCrossed } from 'lucide-react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <UtensilsCrossed size={24} />
          </div>
          <span className="logo-text">TiffinHub</span>
        </div>
        
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
