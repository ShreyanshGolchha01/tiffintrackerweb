import { useState } from 'react'
import { Bell, Rocket } from 'lucide-react'
import './CTA.css'

function CTA({ onSubscribe }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      onSubscribe(email)
      setEmail('')
    }
  }

  return (
    <section className="cta-section">
      <div className="cta-card">
        <div className="cta-icon">
          <Rocket size={32} />
        </div>
        <h2>Ready Ho Launch Ke Liye?</h2>
        <p>Email dalo aur sabse pehle notification pao jab app launch ho!</p>
        
        <form onSubmit={handleSubmit} className="cta-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tumhara@email.com"
            required
          />
          <button type="submit" className="btn-cta">
            <Bell size={18} />
            Notify Me!
          </button>
        </form>
      </div>
    </section>
  )
}

export default CTA
