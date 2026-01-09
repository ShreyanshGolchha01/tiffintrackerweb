import { Home, Calendar, Calculator, Settings, Smartphone, User, Building2, Briefcase } from 'lucide-react'
import './AppScreens.css'

const screens = [
  {
    icon: Home,
    title: 'Home Dashboard',
    description: 'Daily meals track karo, stats dekho'
  },
  {
    icon: Calendar,
    title: 'Calendar View',
    description: 'Poore mahine ki history'
  },
  {
    icon: Calculator,
    title: 'Calculator',
    description: 'Smart settlement calculation'
  },
  {
    icon: Settings,
    title: 'Profile',
    description: 'Settings manage karo'
  }
]

const userTypes = [
  {
    icon: User,
    title: 'PG Students',
    description: 'Jo PG mein rehte hain aur daily tiffin lete hain'
  },
  {
    icon: Building2,
    title: 'Hostel Residents',
    description: 'Hostel mein mess ya tiffin service use karte hain'
  },
  {
    icon: Briefcase,
    title: 'Working Professionals',
    description: 'Office mein lunch tiffin lete hain'
  }
]

function AppScreens() {
  return (
    <>
      {/* Who is this for Section */}
      <section className="user-types">
        <h2 className="section-title">
          <User size={28} />
          Ye Kiski Liye Hai?
        </h2>
        
        <div className="user-types-grid">
          {userTypes.map((user, index) => (
            <div className="user-card spotlight-card spotlight-teal" key={index}>
              <div className="spotlight-glow"></div>
              <div className="spotlight-border"></div>
              <div className="user-icon">
                <user.icon size={28} />
              </div>
              <h3>{user.title}</h3>
              <p>{user.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Screens Section */}
      <section className="app-screens">
        <h2 className="section-title">
          <Smartphone size={28} />
          App Screens
        </h2>
        
        <div className="screens-grid">
          {screens.map((screen, index) => (
            <div className="screen-card spotlight-card spotlight-teal" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="spotlight-glow"></div>
              <div className="spotlight-border"></div>
              <div className="screen-icon">
                <screen.icon size={28} />
              </div>
              <h3>{screen.title}</h3>
              <p>{screen.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default AppScreens
