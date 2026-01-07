import { useState, useEffect } from 'react'
import { Send, Bell, Sparkles, Zap, Star } from 'lucide-react'
import PhoneMockup from './PhoneMockup'
import './Hero.css'

function Hero({ onSubscribe }) {
  const [email, setEmail] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      onSubscribe(email)
      setEmail('')
    }
  }

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`}>
      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-shape shape-1"><Zap size={20} /></div>
        <div className="floating-shape shape-2"><Star size={16} /></div>
        <div className="floating-shape shape-3"><Sparkles size={18} /></div>
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
      </div>

      <div className="hero-content">
        <div className="coming-soon-badge">
          <span className="badge-glow"></span>
          <Sparkles size={16} />
          <span>Coming Soon</span>
        </div>
        
        <h1 className="hero-title">
          Apna Tiffin,
          <span className="gradient-text">Apna Hisaab!</span>
        </h1>
        
        <p className="hero-subtitle">
          PG, Hostel ya Office mein tiffin lete ho? Ab kabhi confusion nahi hogi!
          <strong> Kitne din liya, kitna paisa dena hai - sab track karo easily.</strong>
        </p>

        <div className="hero-features">
          <div className="hero-feature">
            <div className="feature-dot"></div>
            <span>100% Offline</span>
          </div>
          <div className="hero-feature">
            <div className="feature-dot"></div>
            <span>No Login Required</span>
          </div>
          <div className="hero-feature">
            <div className="feature-dot"></div>
            <span>Privacy First</span>
          </div>
        </div>

        <div className="notify-section">
          <h3>
            <Bell size={18} />
            Launch pe notification chahiye?
          </h3>
          <form onSubmit={handleSubmit} className="notify-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Apna email dalo..."
              required
            />
            <button type="submit" className="btn-notify">
              <span>Notify Me</span>
              <Send size={18} />
            </button>
          </form>
          <p className="form-note">Don't worry, spam nahi karenge!</p>
        </div>
      </div>

      <div className="hero-visual">
        <PhoneMockup />
      </div>
    </section>
  )
}

export default Hero
