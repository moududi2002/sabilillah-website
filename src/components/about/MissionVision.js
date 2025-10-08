import '../../styles/about-us/missionVision.css'

export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="container">
        <div className="mv-grid">
          <div className="mv-card mission">
            <div className="mv-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>To provide emergency relief, education, and healthcare to underprivileged communities while upholding Islamic values of compassion, justice, and social responsibility. We strive to create sustainable solutions that empower individuals and transform communities.</p>
          </div>
          
          <div className="mv-card vision">
            <div className="mv-icon">👁️</div>
            <h2>Our Vision</h2>
            <p>A world where every human being has access to basic necessities, quality education, and healthcare regardless of their background, beliefs, or economic status. We envision communities where compassion and service are the foundations of society.</p>
          </div>
          
          <div className="mv-card values">
            <div className="mv-icon">💫</div>
            <h2>Our Values</h2>
            <ul>
              <li>Compassion & Empathy</li>
              <li>Transparency & Accountability</li>
              <li>Excellence in Service</li>
              <li>Community Empowerment</li>
              <li>Faith-Based Integrity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}