import { Coffee, Utensils, UtensilsCrossed, Check, Circle, Signal, Wifi, Battery } from 'lucide-react'
import './PhoneMockup.css'

function PhoneMockup() {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning!'
    if (hour < 17) return 'Good Afternoon!'
    return 'Good Evening!'
  }

  const getDate = () => {
    return new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      weekday: 'long'
    })
  }

  const getTime = () => {
    return new Date().toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  return (
    <div className="phone-container">
      {/* iPhone Frame */}
      <div className="iphone-frame">
        {/* Side Buttons - Left */}
        <div className="side-button silent-switch"></div>
        <div className="side-button volume-up"></div>
        <div className="side-button volume-down"></div>
        
        {/* Side Buttons - Right */}
        <div className="side-button power-button"></div>
        
        {/* Screen */}
        <div className="iphone-screen">
          {/* Status Bar */}
          <div className="status-bar">
            <span className="status-time">{getTime()}</span>
            <div className="dynamic-island"></div>
            <div className="status-icons">
              <Signal size={14} />
              <Wifi size={14} />
              <div className="battery-icon">
                <Battery size={18} />
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="app-preview">
            {/* Header */}
            <div className="preview-header">
              <span className="greeting">{getGreeting()}</span>
              <span className="date">{getDate()}</span>
            </div>

            {/* Meal Cards */}
            <div className="meal-cards">
              <div className="meal-card breakfast">
                <div className="meal-icon">
                  <Coffee size={20} />
                </div>
                <span className="meal-name">Breakfast</span>
                <div className="meal-status checked">
                  <Check size={14} strokeWidth={3} />
                </div>
              </div>
              
              <div className="meal-card lunch">
                <div className="meal-icon">
                  <Utensils size={20} />
                </div>
                <span className="meal-name">Lunch</span>
                <div className="meal-status checked">
                  <Check size={14} strokeWidth={3} />
                </div>
              </div>
              
              <div className="meal-card dinner">
                <div className="meal-icon">
                  <UtensilsCrossed size={20} />
                </div>
                <span className="meal-name">Dinner</span>
                <div className="meal-status pending">
                  <Circle size={14} />
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="stats-card">
              <div className="stat">
                <span className="stat-value">45</span>
                <span className="stat-label">Total</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-value">32</span>
                <span className="stat-label">Taken</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-value">13</span>
                <span className="stat-label">Left</span>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="home-indicator"></div>
          </div>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="phone-glow"></div>
    </div>
  )
}

export default PhoneMockup
