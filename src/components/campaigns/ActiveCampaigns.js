'use client'
import { useState } from 'react'
import '../../styles/ActiveCampaigns.css'

export default function ActiveCampaigns() {
  const [sortBy, setSortBy] = useState('urgency')

  const activeCampaigns = [
    {
      id: 1,
      title: "Emergency Flood Relief in Sylhet",
      category: "emergency",
      description: "Providing immediate food, shelter, and medical aid to 5,000 flood-affected families in Sylhet region. Many families have lost their homes and are in urgent need of basic necessities.",
      progress: 65,
      raised: "৳32,50,000",
      goal: "৳50,00,000",
      donors: 1247,
      urgency: "high",
      location: "Sylhet",
      deadline: "2024-12-15",
      image: "/images/campaigns/flood-relief.jpg",
      updates: [
        { date: "2024-01-15", text: "Distributed food packages to 500 families" },
        { date: "2024-01-10", text: "Medical camp served 300 patients" }
      ]
    },
    {
      id: 2,
      title: "Education for 1000 Underprivileged Children",
      category: "education", 
      description: "Sponsoring education for 1000 children from low-income families for one full year. Includes school fees, books, uniforms, and tutoring support.",
      progress: 40,
      raised: "৳20,00,000",
      goal: "৳50,00,000",
      donors: 892,
      urgency: "medium",
      location: "Dhaka Division",
      deadline: "2024-11-30",
      image: "/images/campaigns/education.jpg",
      updates: [
        { date: "2024-01-20", text: "Admitted 250 children to schools" },
        { date: "2024-01-05", text: "Distributed educational materials" }
      ]
    },
    {
      id: 3,
      title: "Clean Water Project in Rural Areas",
      category: "water",
      description: "Installing tube wells and water purification systems in 10 remote villages where access to clean drinking water is limited.",
      progress: 80,
      raised: "৳8,00,000", 
      goal: "৳10,00,000",
      donors: 543,
      urgency: "high",
      location: "Rajshahi",
      deadline: "2024-10-20",
      image: "/images/campaigns/water-project.jpg",
      updates: [
        { date: "2024-01-18", text: "Completed 3 tube well installations" },
        { date: "2024-01-12", text: "Identified 10 target villages" }
      ]
    },
    {
      id: 4,
      title: "Winter Clothing Drive for Homeless",
      category: "emergency",
      description: "Providing warm clothing, blankets, and shelter to homeless people during the cold winter months across major cities.",
      progress: 35,
      raised: "৳3,50,000",
      goal: "৳10,00,000", 
      donors: 321,
      urgency: "medium",
      location: "Nationwide",
      deadline: "2024-02-28",
      image: "/images/campaigns/winter-drive.jpg",
      updates: [
        { date: "2024-01-22", text: "Distributed 500 blankets in Dhaka" }
      ]
    },
    {
      id: 5,
      title: "Healthcare for Rural Communities",
      category: "healthcare",
      description: "Establishing monthly medical camps in remote villages with free checkups, medicines, and health awareness sessions.",
      progress: 55,
      raised: "৳11,00,000",
      goal: "৳20,00,000",
      donors: 678,
      urgency: "medium", 
      location: "Chittagong",
      deadline: "2024-09-15",
      image: "/images/campaigns/healthcare.jpg",
      updates: [
        { date: "2024-01-25", text: "First medical camp served 400 patients" }
      ]
    },
    {
      id: 6,
      title: "Orphan Support Program",
      category: "orphan",
      description: "Comprehensive support for 200 orphans including education, healthcare, nutrition, and emotional counseling.",
      progress: 25,
      raised: "৳5,00,000",
      goal: "৳20,00,000",
      donors: 234,
      urgency: "low",
      location: "Nationwide", 
      deadline: "2024-12-31",
      image: "/images/campaigns/orphan-support.jpg",
      updates: [
        { date: "2024-01-30", text: "Enrolled 50 orphans in the program" }
      ]
    }
  ]

  const sortedCampaigns = [...activeCampaigns].sort((a, b) => {
    if (sortBy === 'urgency') {
      const urgencyOrder = { high: 3, medium: 2, low: 1 }
      return urgencyOrder[b.urgency] - urgencyOrder[a.urgency]
    } else if (sortBy === 'progress') {
      return b.progress - a.progress
    } else if (sortBy === 'donors') {
      return b.donors - a.donors
    }
    return 0
  })

  return (
    <section className="active-campaigns">
      <div className="container">
        <div className="section-header">
          <h2>Active Campaigns</h2>
          <div className="sort-controls">
            <label>Sort by:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="urgency">Urgency</option>
              <option value="progress">Progress</option>
              <option value="donors">Most Donors</option>
            </select>
          </div>
        </div>

        <div className="campaigns-grid-detailed">
          {sortedCampaigns.map(campaign => (
            <div key={campaign.id} className="campaign-card-detailed">
              <div className="campaign-image">
                <div className="image-placeholder">
                  {campaign.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </div>
                <div className={`urgency-badge ${campaign.urgency}`}>
                  {campaign.urgency.toUpperCase()} PRIORITY
                </div>
              </div>
              
              <div className="campaign-content">
                <div className="campaign-meta">
                  <span className="category-tag">{campaign.category}</span>
                  <span className="location">📍 {campaign.location}</span>
                </div>
                
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
                    <span>{campaign.progress}%</span>
                  </div>
                </div>

                <div className="campaign-details">
                  <div className="detail-item">
                    <span className="detail-label">Donors</span>
                    <span className="detail-value">{campaign.donors}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Deadline</span>
                    <span className="detail-value">{campaign.deadline}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Updates</span>
                    <span className="detail-value">{campaign.updates.length}</span>
                  </div>
                </div>

                <div className="campaign-actions">
                  <button className="btn-donate">Donate Now</button>
                  <button className="btn-secondary">View Details</button>
                  <button className="btn-outline">Share</button>
                </div>

                {campaign.updates.length > 0 && (
                  <div className="recent-update">
                    <strong>Latest Update:</strong> {campaign.updates[0].text}
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