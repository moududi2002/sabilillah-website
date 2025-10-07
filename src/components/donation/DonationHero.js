import '../../styles/donation/DonationHero.css'

export default function DonationHero() {
  return (
    <section className="donation-hero">
      <div className="container">
        <div className="hero-content">
          <h1>Make a Difference Today</h1>
          <p>Your donation can transform lives. Choose how you want to support our mission.</p>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="number">৳2.5Cr+</span>
              <span className="label">Raised So Far</span>
            </div>
            <div className="impact-stat">
              <span className="number">50K+</span>
              <span className="label">Lives Changed</span>
            </div>
            <div className="impact-stat">
              <span className="number">100%</span>
              <span className="label">Transparent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}