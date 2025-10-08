'use client'
import { useState } from 'react'
import '../../styles/about-us/donorCategories.css'

export default function DonorCategories() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filters = [
    { id: 'all', label: 'All Donors' },
    { id: 'regular', label: 'Regular Donors' },
    { id: 'onetime', label: 'One-Time Donors' },
    { id: 'project', label: 'Project Based' },
    { id: 'corporate', label: 'Corporate Partners' }
  ]

  const donors = [
    { 
      id: 1, 
      name: 'Abdullah Rahman', 
      type: ['regular', 'project'], 
      since: '2018',
      amount: '৳2,50,000+',
      projects: ['Education', 'Healthcare']
    },
    { 
      id: 2, 
      name: 'Tech Solutions Ltd.', 
      type: ['corporate', 'project'], 
      since: '2020',
      amount: '৳5,00,000+',
      projects: ['Digital Education']
    },
    // ... more donors
  ]

  const filteredDonors = donors.filter(donor => 
    activeFilter === 'all' || donor.type.includes(activeFilter)
  )

  return (
    <section className="donor-section">
      <div className="container">
        <h2>Our Valued Donors & Partners</h2>
        <p>Meet the generous individuals and organizations supporting our mission</p>
        
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Donors Grid */}
        <div className="donors-grid">
          {filteredDonors.map(donor => (
            <div key={donor.id} className="donor-card">
              <div className="donor-avatar">
                {donor.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3>{donor.name}</h3>
              <div className="donor-types">
                {donor.type.map(type => (
                  <span key={type} className="donor-type-tag">{type}</span>
                ))}
              </div>
              <div className="donor-info">
                <p>Since {donor.since}</p>
                <p className="donor-amount">{donor.amount}</p>
                {donor.projects && (
                  <div className="donor-projects">
                    {donor.projects.map(project => (
                      <span key={project} className="project-tag">{project}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}