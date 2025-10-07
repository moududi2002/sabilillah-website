'use client'
import { useState } from 'react'
import '../../styles/blog/BlogFilters.css'

export default function BlogFilters({ onFilterChange }) {
  const [activeFilters, setActiveFilters] = useState({
    category: 'all',
    type: 'all',
    sort: 'newest'
  })

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'project-updates', label: 'Project Updates' },
    { id: 'emergency-response', label: 'Emergency Response' },
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'community', label: 'Community Development' }
  ]

  const types = [
    { id: 'all', label: 'All Types' },
    { id: 'article', label: 'Articles' },
    { id: 'news', label: 'News' },
    { id: 'story', label: 'Stories' },
    { id: 'report', label: 'Reports' }
  ]

  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'popular', label: 'Most Popular' }
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

  return (
    <section className="blog-filters">
      <div className="filter-groups">
        {/* Category Filter */}
        <div className="filter-group">
          <label>Category</label>
          <div className="filter-options">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilters.category === category.id ? 'active' : ''}`}
                onClick={() => handleFilterChange('category', category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div className="filter-group">
          <label>Content Type</label>
          <div className="filter-options">
            {types.map(type => (
              <button
                key={type.id}
                className={`filter-btn ${activeFilters.type === type.id ? 'active' : ''}`}
                onClick={() => handleFilterChange('type', type.id)}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="filter-group">
          <label>Sort By</label>
          <select
            value={activeFilters.sort}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
            className="sort-select"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      <div className="active-filters">
        {(activeFilters.category !== 'all' || activeFilters.type !== 'all') && (
          <div className="active-tags">
            {activeFilters.category !== 'all' && (
              <span className="active-tag">
                Category: {categories.find(c => c.id === activeFilters.category)?.label}
                <button onClick={() => handleFilterChange('category', 'all')}>×</button>
              </span>
            )}
            {activeFilters.type !== 'all' && (
              <span className="active-tag">
                Type: {types.find(t => t.id === activeFilters.type)?.label}
                <button onClick={() => handleFilterChange('type', 'all')}>×</button>
              </span>
            )}
            <button 
              className="clear-all"
              onClick={() => setActiveFilters({ category: 'all', type: 'all', sort: 'newest' })}
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </section>
  )
}