'use client'
import { useState } from 'react'
import '../../styles/CampaignsFilter.css'

export default function CampaignsFilter({ onFilterChange }) {
  const [activeFilters, setActiveFilters] = useState({
    category: 'all',
    status: 'active',
    urgency: 'all',
    location: 'all'
  })

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'emergency', label: 'Emergency Relief' },
    { id: 'orphan', label: 'Orphan Care' },
    { id: 'water', label: 'Water Projects' },
    { id: 'food', label: 'Food Security' }
  ]

  const statuses = [
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
    { id: 'upcoming', label: 'Upcoming' }
  ]

  const urgencyLevels = [
    { id: 'all', label: 'All Urgency' },
    { id: 'high', label: 'High Urgency' },
    { id: 'medium', label: 'Medium' },
    { id: 'low', label: 'Low' }
  ]

  const locations = [
    { id: 'all', label: 'All Locations' },
    { id: 'dhaka', label: 'Dhaka Division' },
    { id: 'chittagong', label: 'Chittagong' },
    { id: 'sylhet', label: 'Sylhet' },
    { id: 'rajshahi', label: 'Rajshahi' }
  ]

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...activeFilters,
      [filterType]: value
    }
    setActiveFilters(newFilters)
    if (onFilterChange) {
      onFilterChange(newFilters)
    }
  }

  const clearFilters = () => {
    const resetFilters = {
      category: 'all',
      status: 'active',
      urgency: 'all',
      location: 'all'
    }
    setActiveFilters(resetFilters)
    if (onFilterChange) {
      onFilterChange(resetFilters)
    }
  }

  return (
    <section className="campaigns-filter">
      <div className="container">
        <div className="filter-header">
          <h2>Find Campaigns That Inspire You</h2>
          <p>Filter by category, status, urgency, or location</p>
        </div>

        <div className="filter-grid">
          {/* Category Filter */}
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <div className="filter-options">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-option ${activeFilters.category === category.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange('category', category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="filter-group">
            <label className="filter-label">Status</label>
            <div className="filter-options">
              {statuses.map(status => (
                <button
                  key={status.id}
                  className={`filter-option ${activeFilters.status === status.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange('status', status.id)}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>

          {/* Urgency Filter */}
          <div className="filter-group">
            <label className="filter-label">Urgency Level</label>
            <div className="filter-options">
              {urgencyLevels.map(urgency => (
                <button
                  key={urgency.id}
                  className={`filter-option urgency-${urgency.id} ${activeFilters.urgency === urgency.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange('urgency', urgency.id)}
                >
                  {urgency.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="filter-group">
            <label className="filter-label">Location</label>
            <div className="filter-options">
              {locations.map(location => (
                <button
                  key={location.id}
                  className={`filter-option ${activeFilters.location === location.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange('location', location.id)}
                >
                  {location.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        <div className="active-filters">
          <div className="active-filters-list">
            {Object.entries(activeFilters).map(([key, value]) => {
              if (value !== 'all' && value !== 'active') {
                const allOptions = [...categories, ...statuses, ...urgencyLevels, ...locations]
                const option = allOptions.find(opt => opt.id === value)
                return (
                  <span key={key} className="active-filter-tag">
                    {option?.label}
                    <button 
                      onClick={() => handleFilterChange(key, key === 'status' ? 'active' : 'all')}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )
              }
              return null
            })}
          </div>
          
          {(activeFilters.category !== 'all' || activeFilters.urgency !== 'all' || activeFilters.location !== 'all' || activeFilters.status !== 'active') && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear All Filters
            </button>
          )}
        </div>
      </div>
    </section>
  )
}