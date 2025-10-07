'use client'
import { useState } from 'react'
import '../styles/Testimonials.css'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Abdullah Al Mamun",
      role: "Regular Donor",
      content: "I've been donating to Sabilillah Foundation for 3 years. Their transparency and impact reports give me confidence that my donations are making real difference.",
      avatar: "AA"
    },
    {
      id: 2,
      name: "Fatema Begum",
      role: "Scholarship Recipient", 
      content: "Thanks to Sabilillah Foundation, I completed my graduation. Without their support, higher education would have been just a dream for me.",
      avatar: "FB"
    },
    {
      id: 3,
      name: "Dr. Rahim Khan",
      role: "Medical Volunteer",
      content: "Working with Sabilillah Foundation's medical camps has been incredibly rewarding. Their dedication to serving remote communities is inspiring.",
      avatar: "RK"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>What People Say About Us</h2>
          <p>Stories of impact from our donors and beneficiaries</p>
        </div>

        <div className="testimonial-container">
          <button className="nav-btn prev-btn" onClick={prevTestimonial}>‹</button>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">“</div>
              <p>{testimonials[currentIndex].content}</p>
            </div>
            
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="author-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <button className="nav-btn next-btn" onClick={nextTestimonial}>›</button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}