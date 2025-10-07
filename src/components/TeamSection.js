import '../styles/TeamSection.css'

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Anichur Rahman",
      position: "Chairman",
      bio: "Former professor of Islamic Studies with 25+ years of experience in social work and community development.",
      photo: "/images/team/chairman.jpg"
    },
    {
      id: 2, 
      name: "Nazmul Huda",
      position: "Executive Director",
      bio: "Social entrepreneur with expertise in project management and women empowerment initiatives across rural Bangladesh.",
      photo: "/images/team/director.jpg"
    },
    {
      id: 3,
      name: "Airin Afroj Aishi",
      position: "Finance Secretary", 
      bio: "Chartered accountant with 15 years experience in non-profit financial management and transparency systems.",
      photo: "/images/team/finance.jpg"
    },
    {
      id: 4,
      name: "Abul Ala Moududi",
      position: "Program Manager",
      bio: "Development professional specializing in education and healthcare projects for underprivileged communities.",
      photo: "/images/team/program.jpg"
    }
  ]

  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <h2>Our Leadership Team</h2>
          <p>Meet the dedicated individuals guiding our mission forward</p>
        </div>

        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-photo">
                <div className="photo-placeholder">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-bio">{member.bio}</p>
                
                <div className="team-social">
                  <button className="social-btn">LinkedIn</button>
                  <button className="social-btn">Email</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}