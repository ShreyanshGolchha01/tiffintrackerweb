import { Coffee, Utensils, UtensilsCrossed, Check, Circle, Signal, Wifi, Battery, Sun, Calendar, TrendingUp } from 'lucide-react'
import './PhoneMockup.css'

function PhoneMockup() {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  const getGreetingEmoji = () => {
    const hour = new Date().getHours()
    if (hour < 12) return '🌅'
    if (hour < 17) return '☀️'
    return '🌙'
  }

  const getDate = () => {
    return new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      weekday: 'short'
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
      {/* Floating particles */}
      <div className="phone-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

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
          {/* Gradient Overlay */}
          <div className="screen-gradient-overlay"></div>
          
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
            {/* Header Section */}
            <div className="preview-header">
              <div className="header-top">
                <div className="greeting-section">
                  <span className="greeting-emoji">{getGreetingEmoji()}</span>
                  <div className="greeting-text">
                    <span className="greeting">{getGreeting()}</span>
                    <span className="user-name">Rahul!</span>
                  </div>
                </div>
                <div className="date-badge">
                  <Calendar size={12} />
                  <span>{getDate()}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Row */}
            <div className="quick-stats">
              <div className="quick-stat-item">
                <div className="quick-stat-ring">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path className="circle" strokeDasharray="71, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  </svg>
                  <span className="quick-stat-value">32</span>
                </div>
                <span className="quick-stat-label">Taken</span>
              </div>
              <div className="quick-stat-item center-stat">
                <div className="quick-stat-ring main">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path className="circle main" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  </svg>
                  <span className="quick-stat-value">45</span>
                </div>
                <span className="quick-stat-label">Total</span>
              </div>
              <div className="quick-stat-item">
                <div className="quick-stat-ring remaining">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path className="circle remaining" strokeDasharray="29, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  </svg>
                  <span className="quick-stat-value">13</span>
                </div>
                <span className="quick-stat-label">Left</span>
              </div>
            </div>

            {/* Today's Meals Section */}
            <div className="meals-section">
              <div className="section-header">
                <span className="section-title">Today's Meals</span>
                <span className="meals-count">2/3</span>
              </div>
              
              {/* Meal Cards */}
              <div className="meal-cards">
                <div className="meal-card breakfast">
                  <div className="meal-card-glow"></div>
                  <div className="meal-left">
                    <div className="meal-icon">
                      <Coffee size={18} />
                    </div>
                    <div className="meal-info">
                      <span className="meal-name">Breakfast</span>
                      <span className="meal-time">8:30 AM</span>
                    </div>
                  </div>
                  <div className="meal-status checked">
                    <Check size={12} strokeWidth={3} />
                  </div>
                </div>
                
                <div className="meal-card lunch">
                  <div className="meal-card-glow"></div>
                  <div className="meal-left">
                    <div className="meal-icon">
                      <Utensils size={18} />
                    </div>
                    <div className="meal-info">
                      <span className="meal-name">Lunch</span>
                      <span className="meal-time">1:00 PM</span>
                    </div>
                  </div>
                  <div className="meal-status checked">
                    <Check size={12} strokeWidth={3} />
                  </div>
                </div>
                
                <div className="meal-card dinner">
                  <div className="meal-card-glow"></div>
                  <div className="meal-left">
                    <div className="meal-icon">
                      <UtensilsCrossed size={18} />
                    </div>
                    <div className="meal-info">
                      <span className="meal-name">Dinner</span>
                      <span className="meal-time">8:00 PM</span>
                    </div>
                  </div>
                  <div className="meal-status pending">
                    <Circle size={10} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Payment Card */}
            <div className="payment-card">
              <div className="payment-card-shine"></div>
              <div className="payment-info">
                <TrendingUp size={16} />
                <div className="payment-text">
                  <span className="payment-label">This Month</span>
                  <span className="payment-amount">₹2,560</span>
                </div>
              </div>
              <div className="payment-badge">Paid</div>
            </div>

            {/* Home Indicator */}
            <div className="home-indicator"></div>
          </div>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="phone-glow"></div>
      <div className="phone-glow-secondary"></div>
    </div>
  )
}

export default PhoneMockup
