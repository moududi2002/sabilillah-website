'use client'
import { useState } from 'react'
import '../../styles/about-us/HistoryTimeline.css'

export default function HistoryTimeline() {
  const [activeYear, setActiveYear] = useState(2024)
  
  const milestones = [
    { year: 2010, title: 'Foundation Established', description: 'Sabilillah Foundation started with a vision to serve humanity.' },
    { year: 2012, title: 'First Major Project', description: 'Launched education support program for 500 children.' },
    { year: 2015, title: 'Healthcare Initiative', description: 'Started free medical camps in rural areas.' },
    { year: 2018, title: 'Digital Transformation', description: 'Implemented online donation system and transparency portal.' },
    { year: 2020, title: 'COVID-19 Response', description: 'Provided emergency relief during pandemic across 15 districts.' },
    { year: 2024, title: 'Current Operations', description: 'Serving 25+ districts with multiple ongoing projects.' }
  ]

  return (
    <section className="timeline-section">
      <div className="container">
        <h2>Our Journey</h2>
        
        {/* Year Selector */}
        <div className="year-selector">
          {milestones.map(milestone => (
            <button
              key={milestone.year}
              className={`year-btn ${activeYear === milestone.year ? 'active' : ''}`}
              onClick={() => setActiveYear(milestone.year)}
            >
              {milestone.year}
            </button>
          ))}
        </div>

        {/* Active Milestone Display */}
        <div className="active-milestone">
          {milestones.filter(m => m.year === activeYear).map(milestone => (
            <div key={milestone.year} className="milestone-content">
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}