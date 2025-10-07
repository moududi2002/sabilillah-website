'use client'
import { useState } from 'react'
import '../../styles/faq/FAQCategories.css'

export default function FAQCategories({ onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState('donation')

  const categories = [
    {
      id: 'donation',
      name: 'Donations',
      icon: '💰',
      count: 15,
      description: 'Questions about giving and payment methods'
    },
    {
      id: 'projects',
      name: 'Projects', 
      icon: '🚀',
      count: 12,
      description: 'Our ongoing and completed initiatives'
    },
    {
      id: 'transparency',
      name: 'Transparency',
      icon: '📊',
      count: 8,
      description: 'How we use funds and report impact'
    },
    {
      id: 'volunteer',
      name: 'Volunteering',
      icon: '👥',
      count: 6,
      description: 'Getting involved and opportunities'
    },
    {
      id: 'general',
      name: 'General',
      icon: 'ℹ️',
      count: 10,
      description: 'General information about our foundation'
    },
    {
      id: 'technical',
      name: 'Technical',
      icon: '💻',
      count: 5,
      description: 'Website and online services help'
    }
  ]

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId)
    if (onCategoryChange) {
      onCategoryChange(categoryId)
    }
  }

  return (
    <section className="faq-categories">
      <div className="categories-card">
        <h3>Browse by Category</h3>
        <p>Select a category to find relevant questions</p>
        
        <div className="categories-list">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <div className="category-info">
                  <h4>{category.name}</h4>
                  <span className="question-count">{category.count} questions</span>
                </div>
              </div>
              <p className="category-desc">{category.description}</p>
            </button>
          ))}
        </div>

        <div className="search-tip">
          <div className="tip-icon">🔍</div>
          <div>
            <strong>Can't find your answer?</strong>
            <p>Use our search feature or contact support</p>
          </div>
        </div>
      </div>
    </section>
  )
}