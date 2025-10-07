import '../../styles/CampaignStatsSection.css'

export default function CampaignStats() {
  const stats = [
    { number: '98%', label: 'Campaign Success Rate', icon: '🎯', description: 'of our campaigns achieve or exceed their goals' },
    { number: '45+', label: 'Active Initiatives', icon: '🚀', description: 'currently running across Bangladesh' },
    { number: '৳2.5Cr+', label: 'Total Funds Raised', icon: '💰', description: 'since our establishment in 2010' },
    { number: '50K+', label: 'Lives Impacted', icon: '❤️', description: 'through our various programs and campaigns' },
    { number: '325+', label: 'Projects Completed', icon: '✅', description: 'successfully delivered to communities' },
    { number: '15+', label: 'Districts Covered', icon: '🗺️', description: 'with our ongoing operations' }
  ]

  return (
    <section className="campaign-stats-section">
      <div className="container">
        <div className="stats-header">
          <h2>Our Campaign Impact</h2>
          <p>Numbers that reflect our commitment and your trust</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}