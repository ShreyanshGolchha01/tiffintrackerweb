import { UtensilsCrossed, Heart } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="footer-logo-icon">
            <UtensilsCrossed size={20} />
          </div>
          <span>Tiffin Tracker</span>
        </div>
        
        <p className="footer-tagline">Apna Tiffin, Apna Hisaab!</p>
        
        <nav className="footer-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#problems">Problems Solved</a>
        </nav>
        
        <p className="copyright">
          © 2026 Tiffin Tracker. Made with <Heart size={14} className="heart" /> in India
        </p>
      </div>
    </footer>
  )
}

export default Footer
