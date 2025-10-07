import '../../styles/faq/FAQHero.css'

export default function FAQHero() {
  return (
    <section className="faq-hero">
      <div className="container">
        <div className="hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find quick answers to common questions about donations, projects, and our foundation</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="number">50+</span>
              <span className="label">Questions Answered</span>
            </div>
            <div className="stat">
              <span className="number">98%</span>
              <span className="label">Satisfaction Rate</span>
            </div>
            <div className="stat">
              <span className="number">24/7</span>
              <span className="label">Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}