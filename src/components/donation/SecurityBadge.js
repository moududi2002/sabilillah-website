import '../../styles/donation/SecurityBadge.css'

export default function SecurityBadge() {
  const securityFeatures = [
    {
      icon: '🔒',
      title: 'SSL Encrypted',
      description: 'All data is encrypted with 256-bit SSL security'
    },
    {
      icon: '💳',
      title: 'Payment Security',
      description: 'We never store your credit card or payment details'
    },
    {
      icon: '📊',
      title: '100% Transparency',
      description: 'Regular reports on how your donation is used'
    },
    {
      icon: '🛡️',
      title: 'Trusted Partner',
      description: 'Registered with NGO Affairs Bureau since 2010'
    }
  ]

  const trustBadges = [
    { name: 'SSL Secured', icon: '🔐' },
    { name: 'PCI DSS', icon: '💳' },
    { name: 'GDPR Compliant', icon: '📝' },
    { name: 'Verified NGO', icon: '✅' }
  ]

  return (
    <section className="security-badge">
      <div className="container">
        <div className="security-content">
          <div className="security-header">
            <h2>Your Donation is 100% Secure</h2>
            <p>We take your privacy and security seriously</p>
          </div>

          <div className="security-features">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="trust-section">
            <div className="trust-badges">
              {trustBadges.map((badge, index) => (
                <div key={index} className="trust-badge">
                  <span className="badge-icon">{badge.icon}</span>
                  <span className="badge-text">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="guarantee-card">
            <div className="guarantee-header">
              <div className="guarantee-icon">✅</div>
              <h3>Our Donation Guarantee</h3>
            </div>
            <div className="guarantee-content">
              <p>
                We guarantee that 100% of your donation goes directly to the cause you choose. 
                Administrative costs are covered separately by our partners and sponsors.
              </p>
              <ul className="guarantee-list">
                <li>✅ No hidden fees or charges</li>
                <li>✅ Full transparency in fund usage</li>
                <li>✅ Regular impact reports</li>
                <li>✅ Money-back guarantee if project cancels</li>
              </ul>
            </div>
          </div>

          <div className="support-section">
            <div className="support-info">
              <h4>Need Help with Your Donation?</h4>
              <p>Our support team is here to assist you with any questions</p>
              <div className="support-contacts">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <p>+880 XXXX-XXXXXX</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email Us</strong>
                    <p>donate@sabilillah.org</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💬</span>
                  <div>
                    <strong>Live Chat</strong>
                    <p>Available 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}