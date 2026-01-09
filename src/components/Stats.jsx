import { Users, Clock, Star, Zap } from 'lucide-react';
import './Stats.css';

export default function Stats() {
  const stats = [
    { icon: Users, value: '10K+', label: 'Expected Users', color: 'primary' },
    { icon: Clock, value: '5min', label: 'Daily Time Saved', color: 'secondary' },
    { icon: Star, value: '100%', label: 'Offline Ready', color: 'primary' },
    { icon: Zap, value: '0', label: 'Internet Required', color: 'secondary' },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card stat-${stat.color} spotlight-card ${stat.color === 'secondary' ? 'spotlight-teal' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="spotlight-glow"></div>
              <div className="spotlight-border"></div>
              <div className="stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
