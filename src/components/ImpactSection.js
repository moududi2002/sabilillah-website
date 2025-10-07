'use client'
import { useState, useEffect, useRef } from 'react'
import '../styles/ImpactSection.css'

export default function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { number: 12500, label: 'People Helped', suffix: '+' },
    { number: 5400, label: 'Donors', suffix: '+' },
    { number: 325, label: 'Projects Completed', suffix: '+' },
    { number: 28, label: 'Districts Covered', suffix: '+' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="impact-section">
      <div className="container">
        <div className="impact-header">
          <h2>Our Impact in Numbers</h2>
          <p>Real stories, real impact - measured by the lives we've touched</p>
        </div>

        <div className="impact-stats">
          {stats.map((stat, index) => (
            <div key={index} className="impact-stat">
              <div className="stat-number">
                {isVisible ? <Counter target={stat.number} /> : 0}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Animated Counter Component
function Counter({ target }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (target > 0) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [target])

  return count
}