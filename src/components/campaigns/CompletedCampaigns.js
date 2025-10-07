'use client'
import { useState } from 'react'
import '../../styles/CompletedCampaigns.css'

export default function CompletedCampaigns() {
  const [showAll, setShowAll] = useState(false)

  const completedCampaigns = [
    {
      id: 1,
      title: "COVID-19 Emergency Response 2021",
      category: "emergency",
      description: "Provided emergency food, medical supplies, and financial support to 10,000+ families affected by the COVID-19 pandemic across 15 districts.",
      raised: "৳1,20,00,000",
      goal: "৳1,00,00,000",
      donors: 5247,
      location: "Nationwide",
      completionDate: "2022-03-15",
      impact: "10,000+ families supported",
      duration: "12 months",
      image: "/images/campaigns/covid-response.jpg",
      successStory: "Successfully reached over 50,000 people with essential supplies during the pandemic peak. Partnered with 25 local organizations for distribution."
    },
    {
      id: 2,
      title: "Back to School Initiative 2022",
      category: "education",
      description: "Supported 2,000 children from low-income families with school admission, books, uniforms, and educational materials after pandemic school closures.",
      raised: "৳75,00,000",
      goal: "৳60,00,000",
      donors: 1892,
      location: "Dhaka Division",
      completionDate: "2022-12-20",
      impact: "2,000 children back to school",
      duration: "8 months",
      image: "/images/campaigns/back-to-school.jpg",
      successStory: "100% of supported children successfully re-enrolled in schools. 95% showed improved academic performance within 6 months."
    },
    {
      id: 3,
      title: "Clean Water for 20 Villages",
      category: "water",
      description: "Installed 50 tube wells and 10 water purification plants in 20 remote villages, providing clean drinking water to 15,000+ residents.",
      raised: "৳45,00,000",
      goal: "৳40,00,000",
      donors: 1543,
      location: "Rajshahi Division",
      completionDate: "2023-06-10",
      impact: "15,000+ people got clean water",
      duration: "14 months",
      image: "/images/campaigns/clean-water.jpg",
      successStory: "Reduced waterborne diseases by 80% in target villages. Women and children saved 2-3 hours daily from water collection."
    },
    {
      id: 4,
      title: "Winter Relief Program 2022",
      category: "emergency",
      description: "Distributed warm clothing, blankets, and emergency shelter to 5,000 homeless and vulnerable people during severe winter conditions.",
      raised: "৳25,00,000",
      goal: "৳20,00,000",
      donors: 1321,
      location: "Northern Districts",
      completionDate: "2023-01-31",
      impact: "5,000 people protected from cold",
      duration: "3 months",
      image: "/images/campaigns/winter-relief.jpg",
      successStory: "Zero cold-related casualties reported in our operational areas. Distributed 10,000+ winter items through 50 distribution points."
    },
    {
      id: 5,
      title: "Digital Literacy for Youth",
      category: "education",
      description: "Trained 1,500 underprivileged youth in basic computer skills, digital literacy, and online safety across urban slums and rural areas.",
      raised: "৳35,00,000",
      goal: "৳30,00,000",
      donors: 967,
      location: "Major Cities",
      completionDate: "2023-08-15",
      impact: "1,500 youth trained",
      duration: "10 months",
      image: "/images/campaigns/digital-literacy.jpg",
      successStory: "65% of trained youth found employment or started small online businesses. Program expanded to 3 new districts due to success."
    },
    {
      id: 6,
      title: "Medical Camp Series 2023",
      category: "healthcare",
      description: "Organized 25 free medical camps in remote areas, providing healthcare services to 12,000+ patients with limited medical access.",
      raised: "৳55,00,000",
      goal: "৳50,00,000",
      donors: 876,
      location: "Remote Areas",
      completionDate: "2023-11-30",
      impact: "12,000+ patients treated",
      duration: "9 months",
      image: "/images/campaigns/medical-camps.jpg",
      successStory: "Detected and referred 500+ critical cases to specialized hospitals. 80% of patients reported improved health conditions."
    }
  ]

  const displayCampaigns = showAll ? completedCampaigns : completedCampaigns.slice(0, 3)

  return (
    <section className="completed-campaigns">
      <div className="container">
        <div className="section-header">
          <h2>Successfully Completed Campaigns</h2>
          <p>See the impact we've made together through past initiatives</p>
        </div>

        <div className="completed-grid">
          {displayCampaigns.map(campaign => (
            <div key={campaign.id} className="completed-card">
              <div className="completion-badge">
                <span className="badge-icon">✅</span>
                Successfully Completed
              </div>
              
              <div className="campaign-image">
                <div className="image-placeholder">
                  {campaign.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </div>
                <div className="success-overlay">
                  <span className="success-text">100% Funded</span>
                </div>
              </div>
              
              <div className="campaign-content">
                <div className="campaign-meta">
                  <span className="category-tag">{campaign.category}</span>
                  <span className="completion-date">Completed: {campaign.completionDate}</span>
                </div>
                
                <h3 className="campaign-title">{campaign.title}</h3>
                <p className="campaign-description">{campaign.description}</p>
                
                <div className="impact-stats">
                  <div className="impact-item">
                    <span className="impact-label">Funds Raised</span>
                    <span className="impact-value">{campaign.raised}</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-label">Donors</span>
                    <span className="impact-value">{campaign.donors}</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-label">Duration</span>
                    <span className="impact-value">{campaign.duration}</span>
                  </div>
                </div>

                <div className="key-impact">
                  <strong>Key Achievement:</strong> {campaign.impact}
                </div>

                <div className="success-story">
                  <h4>Success Story</h4>
                  <p>{campaign.successStory}</p>
                </div>

                <div className="campaign-stats">
                  <div className="stat">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Goal Achieved</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">{Math.round((parseInt(campaign.raised.replace(/[^\d]/g, '')) / parseInt(campaign.goal.replace(/[^\d]/g, '')) * 100))}%</div>
                    <div className="stat-label">Over Target</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && completedCampaigns.length > 3 && (
          <div className="view-more-container">
            <button 
              className="view-more-btn"
              onClick={() => setShowAll(true)}
            >
              View All {completedCampaigns.length} Completed Campaigns
            </button>
          </div>
        )}
      </div>
    </section>
  )
}