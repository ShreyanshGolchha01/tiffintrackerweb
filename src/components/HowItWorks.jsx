import { Settings, MousePointerClick, Share, Rocket, ArrowRight } from 'lucide-react'
import './HowItWorks.css'

const steps = [
  {
    icon: Settings,
    number: '1',
    title: 'Setup Karo',
    description: 'Apni tiffin details dalo - konse meals, Sunday config, monthly charge'
  },
  {
    icon: MousePointerClick,
    number: '2',
    title: 'Daily Mark Karo',
    description: 'Jo meals liye unhe tap karke mark karo - 2 second ka kaam!'
  },
  {
    icon: Share,
    number: '3',
    title: 'Calculate & Share',
    description: 'Month end pe calculate karo aur bill share karo!'
  }
]

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="section-title">
        <Rocket size={28} />
        Kaise Kaam Karta Hai?
      </h2>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-wrapper" key={index}>
            <div className="step spotlight-card">
              <div className="spotlight-glow"></div>
              <div className="spotlight-border"></div>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                <step.icon size={24} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="step-arrow">
                <ArrowRight size={24} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
