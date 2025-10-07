'use client'
import { useState } from 'react'
import '../styles/Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email)
    setIsSubscribed(true)
    setEmail('')
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false)
    }, 3000)
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Stay Updated with Our Work</h2>
            <p>Subscribe to our newsletter and get regular updates about our projects, success stories, and upcoming campaigns.</p>
          </div>
          
          <div className="newsletter-form">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="subscribe-form">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                  />
                  <button type="submit" className="subscribe-btn">
                    Subscribe
                  </button>
                </div>
                <p className="privacy-note">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <p>Thank you for subscribing! Check your email for confirmation.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}