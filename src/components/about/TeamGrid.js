'use client'
import { useState } from 'react'
import '../../styles/about-us/teamGrid.css'

export default function TeamGrid() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filters = [
    { id: 'all', label: 'All Members' },
    { id: 'management', label: 'Management' },
    { id: 'advisors', label: 'Advisors' },
    { id: 'coordinators', label: 'Coordinators' }
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Mohammad Rahman",
      position: "Chairman & Founder",
      category: "management",
      bio: "Former professor of Islamic Studies with 25+ years of experience in social work and community development. PhD in Social Welfare from University of Dhaka.",
      expertise: ["Social Work", "Community Development", "Education"],
      experience: "25+ years",
      photo: "/images/team/chairman.jpg"
    },
    {
      id: 2, 
      name: "Ayesha Begum",
      position: "Executive Director",
      category: "management",
      bio: "Social entrepreneur with expertise in project management and women empowerment initiatives across rural Bangladesh. Masters in Development Studies.",
      expertise: ["Project Management", "Women Empowerment", "Rural Development"],
      experience: "15+ years",
      photo: "/images/team/director.jpg"
    },
    {
      id: 3,
      name: "Prof. Naim Ahmed",
      position: "Senior Advisor", 
      category: "advisors",
      bio: "Renowned economist and former university professor. Provides strategic guidance on sustainable development and financial planning.",
      expertise: ["Economics", "Strategic Planning", "Sustainability"],
      experience: "30+ years",
      photo: "/images/team/advisor1.jpg"
    },
    {
      id: 4,
      name: "Dr. Salma Khan",
      position: "Medical Advisor",
      category: "advisors", 
      bio: "Senior medical professional with extensive experience in public health. Oversees all healthcare initiatives and medical camps.",
      expertise: ["Public Health", "Medical Care", "Healthcare Management"],
      experience: "20+ years",
      photo: "/images/team/advisor2.jpg"
    },
    {
      id: 5,
      name: "Rafiq Islam",
      position: "Program Coordinator",
      category: "coordinators",
      bio: "Manages field operations and coordinates with local communities. Specialized in disaster response and emergency relief.",
      expertise: ["Field Operations", "Disaster Response", "Community Outreach"],
      experience: "8+ years",
      photo: "/images/team/coordinator1.jpg"
    },
    {
      id: 6,
      name: "Tasnim Fatima",
      position: "Education Coordinator",
      category: "coordinators",
      bio: "Leads education programs and scholarship distributions. Passionate about creating educational opportunities for underprivileged children.",
      expertise: ["Education", "Scholarship Programs", "Child Development"],
      experience: "6+ years",
      photo: "/images/team/coordinator2.jpg"
    }
  ]

  const filteredMembers = teamMembers.filter(member => 
    activeFilter === 'all' || member.category === activeFilter
  )

  return (
    <section className="team-grid-section">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>Dedicated professionals committed to making a difference</p>
        </div>

        {/* Filter Buttons */}
        <div className="team-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`team-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="team-members-grid">
          {filteredMembers.map(member => (
            <div key={member.id} className="team-member-card">
              <div className="member-photo">
                <div className="photo-placeholder">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-experience">Experience: {member.experience}</p>
                
                <p className="member-bio">{member.bio}</p>
                
                <div className="member-expertise">
                  {member.expertise.map(skill => (
                    <span key={skill} className="expertise-tag">{skill}</span>
                  ))}
                </div>
                
                <div className="member-contact">
                  <button className="contact-btn">View Profile</button>
                  <button className="contact-btn outline">Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}