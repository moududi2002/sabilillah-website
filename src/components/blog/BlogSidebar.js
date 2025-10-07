'use client'
import { useState } from 'react'
import '../../styles/blog/BlogSidebar.css'

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState('')

  const popularPosts = [
    {
      id: 1,
      title: "How Your Donations Transformed a Village",
      date: "2024-01-15",
      views: 2450
    },
    {
      id: 2, 
      title: "Emergency Response: Cyclone Relief Efforts",
      date: "2024-01-12",
      views: 1890
    },
    {
      id: 3,
      title: "Education Program Success Stories",
      date: "2024-01-10",
      views: 1670
    },
    {
      id: 4,
      title: "Annual Transparency Report 2023",
      date: "2024-01-08", 
      views: 1540
    }
  ]

  const categories = [
    { name: "Success Stories", count: 24, color: "#10b981" },
    { name: "Project Updates", count: 18, color: "#3b82f6" },
    { name: "Emergency Response", count: 12, color: "#ef4444" },
    { name: "Education", count: 15, color: "#8b5cf6" },
    { name: "Healthcare", count: 11, color: "#06b6d4" },
    { name: "Community Development", count: 9, color: "#f59e0b" }
  ]

  const tags = [
    "Donation Impact", "Flood Relief", "Education", "Healthcare", 
    "Winter Support", "Community", "Transparency", "Success Stories",
    "Emergency", "Development", "Children", "Women Empowerment"
  ]

  const archive = [
    { month: "January 2024", count: 8 },
    { month: "December 2023", count: 12 },
    { month: "November 2023", count: 9 },
    { month: "October 2023", count: 7 },
    { month: "September 2023", count: 10 }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <aside className="blog-sidebar">
      {/* Search Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Search Blog</h3>
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              🔍
            </button>
          </div>
        </form>
      </div>

      {/* About Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">About Our Blog</h3>
        <div className="about-content">
          <p>
            Stay updated with the latest news, success stories, and project updates 
            from Sabilillah Foundation. Read about the impact of your donations and 
            our ongoing efforts to serve communities.
          </p>
          <div className="blog-stats">
            <div className="blog-stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Articles</span>
            </div>
            <div className="blog-stat">
              <span className="stat-number">25K+</span>
              <span className="stat-label">Monthly Readers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Popular Posts</h3>
        <div className="popular-posts">
          {popularPosts.map(post => (
            <div key={post.id} className="popular-post">
              <div className="post-preview">
                <h4 className="post-title">{post.title}</h4>
                <div className="post-meta">
                  <span className="post-date">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="post-views">👁️ {post.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Categories</h3>
        <div className="categories-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <div className="category-info">
                <span 
                  className="category-color" 
                  style={{ backgroundColor: category.color }}
                ></span>
                <span className="category-name">{category.name}</span>
              </div>
              <span className="category-count">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Popular Tags</h3>
        <div className="tags-cloud">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Archive */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Archive</h3>
        <div className="archive-list">
          {archive.map((item, index) => (
            <div key={index} className="archive-item">
              <span className="archive-month">{item.month}</span>
              <span className="archive-count">({item.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="sidebar-widget newsletter-widget">
        <h3 className="widget-title">Stay Updated</h3>
        <div className="newsletter-content">
          <p>Get the latest articles and updates directly in your inbox</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </aside>
  )
}