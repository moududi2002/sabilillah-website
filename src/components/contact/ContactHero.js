import '../../styles/contact/ContactHero.css'

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Reach out to us with your questions, suggestions, or partnership inquiries.</p>
          <div className="hero-stats">
            <div className="stat statText">
              <span className="number">24/7</span>
              <span className="label">Support Available</span>
            </div>
            <div className="stat statText">
              <span className="number">2h</span>
              <span className="label">Avg Response Time</span>
            </div>
            <div className="stat statText">
              <span className="number">100%</span>
              <span className="label">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}