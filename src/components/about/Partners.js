import '../../styles/Partners.css'

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "Tech Solutions Ltd.",
      type: "Corporate Partner",
      since: "2020",
      projects: ["Digital Education Lab", "IT Training"],
      logo: "/images/partners/tech-solutions.png"
    },
    {
      id: 2,
      name: "Green Foundation",
      type: "NGO Partner", 
      since: "2018",
      projects: ["Environmental Education", "Tree Plantation"],
      logo: "/images/partners/green-foundation.png"
    },
    {
      id: 3,
      name: "MediCare International",
      type: "Healthcare Partner",
      since: "2019", 
      projects: ["Medical Camps", "Health Awareness"],
      logo: "/images/partners/medicare.png"
    },
    {
      id: 4,
      name: "EduCare Bangladesh",
      type: "Education Partner",
      since: "2017",
      projects: ["Scholarship Program", "School Supplies"],
      logo: "/images/partners/educare.png"
    },
    {
      id: 5,
      name: "Youth Volunteer Network",
      type: "Volunteer Partner",
      since: "2021",
      projects: ["Community Service", "Awareness Campaigns"],
      logo: "/images/partners/youth-network.png"
    },
    {
      id: 6,
      name: "Islamic Relief Co.",
      type: "International Partner",
      since: "2015",
      projects: ["Emergency Relief", "Orphan Support"],
      logo: "/images/partners/islamic-relief.png"
    }
  ]

  return (
    <section className="partners-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Trusted Partners</h2>
          <p>Collaborating with organizations that share our vision for a better world</p>
        </div>

        <div className="partners-grid">
          {partners.map(partner => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo">
                <div className="logo-placeholder">
                  {partner.name.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              
              <div className="partner-info">
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-type">{partner.type}</p>
                <p className="partner-since">Partner since {partner.since}</p>
                
                <div className="partner-projects">
                  <span className="projects-label">Collaborations:</span>
                  <div className="project-tags">
                    {partner.projects.map(project => (
                      <span key={project} className="project-tag">{project}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="partnership-stats">
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Active Partnerships</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8</div>
            <div className="stat-label">Years of Collaboration</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Joint Projects</div>
          </div>
        </div>
      </div>
    </section>
  )
}