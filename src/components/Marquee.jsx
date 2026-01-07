import { Smartphone, WifiOff, Calculator, Share2, Shield, Zap, Clock, CheckCircle } from 'lucide-react';
import './Marquee.css';

export default function Marquee() {
  const items = [
    { icon: Smartphone, text: 'Mobile First' },
    { icon: WifiOff, text: '100% Offline' },
    { icon: Calculator, text: 'Auto Calculate' },
    { icon: Share2, text: 'Easy Share' },
    { icon: Shield, text: 'Privacy First' },
    { icon: Zap, text: 'Super Fast' },
    { icon: Clock, text: 'Save Time' },
    { icon: CheckCircle, text: 'Simple UI' },
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-content">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="marquee-item">
              <item.icon size={18} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
