import '../styles/AboutSection.css'

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <h2>About Sabilillah Foundation</h2>
          <p>Committed to serving humanity with compassion and faith since 2010</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To provide emergency relief, education, and healthcare to underprivileged communities while upholding Islamic values of compassion and social justice.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>A world where every human being has access to basic necessities, education, and healthcare, regardless of their background or beliefs.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">💫</div>
            <h3>Our Motto</h3>
            <p>"Serving Humanity, Strengthening Faith" - We believe that serving people is the highest form of worship.</p>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">14+</span>
            <span className="stat-label">Years of Service</span>
          </div>
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Lives Impacted</span>
          </div>
          <div className="stat">
            <span className="stat-number">25+</span>
            <span className="stat-label">Districts Covered</span>
          </div>
        </div>
      </div>
    </section>
  )
}