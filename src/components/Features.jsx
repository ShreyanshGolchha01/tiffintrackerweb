import { 
  Smartphone, 
  Calendar, 
  Calculator, 
  Share2, 
  WifiOff, 
  Shield,
  Sparkles
} from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: Smartphone,
    title: 'Daily Meal Tracking',
    description: 'Breakfast, Lunch, Dinner - ek tap mein mark karo. Simple aur fast!'
  },
  {
    icon: Calendar,
    title: 'Calendar History',
    description: 'Poore mahine ka record dekho. Kis din kya liya - sab clear!'
  },
  {
    icon: Calculator,
    title: 'Smart Calculator',
    description: 'Month end pe exact settlement calculate karo. Galti ka chance zero!'
  },
  {
    icon: Share2,
    title: 'Share Bill',
    description: 'Settlement bill WhatsApp pe share karo. Professional format mein!'
  },
  {
    icon: WifiOff,
    title: '100% Offline',
    description: 'Internet ki zaroorat nahi! Sab data phone mein safe.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'No login, no account. Tumhara data sirf tumhare phone mein!'
  }
]

function Features() {
  return (
    <section className="features" id="features">
      <h2 className="section-title">
        <Sparkles size={28} />
        Kya Kya Milega?
      </h2>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card spotlight-card" key={index}>
            <div className="spotlight-glow"></div>
            <div className="spotlight-border"></div>
            <div className="feature-icon">
              <feature.icon size={24} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
