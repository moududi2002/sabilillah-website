import '../../styles/about-us/AboutHero.css'

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="hero-content">
          <h1>About Sabilillah Foundation</h1>
          <p>14 Years of Serving Humanity with Compassion and Faith</p>
          <div className="hero-stats">
            <div className="stat statText">
              <span className="number">50K+</span>
              <span className="label">Lives Impacted</span>
            </div>
            <div className="stat statText">
              <span className="number">25+</span>
              <span className="label">Districts</span>
            </div>
            <div className="stat statText">
              <span className="number">325+</span>
              <span className="label">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}