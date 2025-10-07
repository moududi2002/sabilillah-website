import '../../styles/CampaignsHero.css'

export default function CampaignsHero() {
  return (
    <section className="campaigns-hero">
      <div className="container">
        <div className="hero-content">
          <h1>Our Campaigns & Causes</h1>
          <p>Join us in making a tangible difference through our various initiatives</p>
          <div className="hero-stats">
            <div className="stat statText">
              <span className="number">45+</span>
              <span className="label">Active Campaigns</span>
            </div>
            <div className="stat statText">
              <span className="number">325+</span>
              <span className="label">Completed</span>
            </div>
            <div className="stat statText">
              <span className="number">৳2.5Cr+</span>
              <span className="label">Funds Raised</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}