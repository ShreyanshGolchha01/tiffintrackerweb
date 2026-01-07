import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Features from './components/Features'
import Problems from './components/Problems'
import HowItWorks from './components/HowItWorks'
import AppScreens from './components/AppScreens'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Modal from './components/Modal'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleSubscribe = (email) => {
    const subscribers = JSON.parse(localStorage.getItem('tiffin_subscribers') || '[]')
    if (!subscribers.includes(email)) {
      subscribers.push(email)
      localStorage.setItem('tiffin_subscribers', JSON.stringify(subscribers))
    }
    setShowModal(true)
  }

  // Smooth scroll reveal animation with better performance
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother class toggle
          requestAnimationFrame(() => {
            entry.target.classList.add('visible')
          })
        }
      })
    }, observerOptions)

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      document.querySelectorAll('section, .reveal-item').forEach(el => {
        el.classList.add('reveal')
        observer.observe(el)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <Hero onSubscribe={handleSubscribe} />
        <Marquee />
        <Stats />
        <Features />
        <Problems />
        <HowItWorks />
        <AppScreens />
        <CTA onSubscribe={handleSubscribe} />
      </main>
      <Footer />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default App
