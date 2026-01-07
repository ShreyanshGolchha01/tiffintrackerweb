import { UtensilsCrossed } from 'lucide-react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <UtensilsCrossed size={24} />
          </div>
          <span className="logo-text">Tiffin Tracker</span>
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
