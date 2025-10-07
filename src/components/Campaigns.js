import '../styles/Campaigns.css'

export default function Campaigns() {
  const campaigns = [
    {
      id: 1,
      title: "Emergency Relief for Flood Victims",
      description: "Providing food, shelter and medical aid to flood affected families in northern regions.",
      progress: 65,
      raised: "$32,500",
      goal: "$50,000"
    },
    {
      id: 2,
      title: "Education for Underprivileged Children", 
      description: "Sponsoring education for 500 children from low-income families for one full year.",
      progress: 40,
      raised: "$20,000",
      goal: "$50,000"
    },
    {
      id: 3,
      title: "Medical Camp in Rural Areas",
      description: "Free medical checkups and medicine distribution in remote villages.",
      progress: 80,
      raised: "$8,000", 
      goal: "$10,000"
    }
  ]

  return (
    <section id="causes" className="campaigns-section">
      <div className="container">
        <h2 className="section-title">Our Active Campaigns</h2>
        <p className="section-subtitle">Join us in making a difference in people's lives</p>
        
        <div className="campaigns-grid">
          {campaigns.map(campaign => (
            <div key={campaign.id} className="campaign-card">
              <div className="campaign-image">
                <div className="image-placeholder">Campaign Image</div>
              </div>
              
              <div className="campaign-content">
                <h3 className="campaign-title">{campaign.title}</h3>
                <p className="campaign-description">{campaign.description}</p>
                
                <div className="progress-section">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${campaign.progress}%`}}
                    ></div>
                  </div>
                  <div className="progress-stats">
                    <span>Raised: <strong>{campaign.raised}</strong></span>
                    <span>Goal: <strong>{campaign.goal}</strong></span>
                  </div>
                </div>
                
                <button className="campaign-donate-btn">Donate to this Cause</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}