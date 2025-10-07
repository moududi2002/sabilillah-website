'use client'
import { useState } from 'react'
import '../../styles/blog/BlogGrid.css'

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const blogPosts = [
    {
      id: 1,
      title: "Flood Relief Success: 5000 Families Supported in Sylhet",
      excerpt: "Thanks to your generous donations, we successfully provided emergency aid to 5000 flood-affected families in Sylhet region with food, medicine, and shelter.",
      category: "success-stories",
      type: "story",
      date: "2024-01-15",
      readTime: "4 min read",
      author: "Abdul Karim",
      image: "/images/blog/flood-relief-success.jpg",
      featured: true,
      views: 1247,
      comments: 23
    },
    {
      id: 2,
      title: "New Education Center Opens in Rural Chattogram",
      excerpt: "We're excited to announce the opening of our new education center that will serve 200 children from underprivileged families in remote areas of Chattogram.",
      category: "project-updates",
      type: "news", 
      date: "2024-01-12",
      readTime: "3 min read",
      author: "Fatema Jahan",
      image: "/images/blog/education-center.jpg",
      featured: false,
      views: 892,
      comments: 15
    },
    {
      id: 3,
      title: "Winter Clothing Drive: Distributing Warmth to Homeless",
      excerpt: "Our winter relief program has distributed over 5000 blankets and warm clothing items to homeless people across major cities during the cold wave.",
      category: "emergency-response",
      type: "article",
      date: "2024-01-10",
      readTime: "5 min read", 
      author: "Dr. Mohammad Rahman",
      image: "/images/blog/winter-drive.jpg",
      featured: true,
      views: 1563,
      comments: 31
    },
    {
      id: 4,
      title: "Annual Impact Report 2023 Released",
      excerpt: "Read our comprehensive annual report detailing the impact of your donations and the progress we've made across all our projects in 2023.",
      category: "reports",
      type: "report",
      date: "2024-01-08",
      readTime: "8 min read",
      author: "Ayesha Begum", 
      image: "/images/blog/annual-report.jpg",
      featured: false,
      views: 2341,
      comments: 42
    },
    {
      id: 5,
      title: "Medical Camp Serves 1000+ Patients in Remote Village",
      excerpt: "Our monthly medical camp in remote northern areas provided free healthcare services to over 1000 patients with limited access to medical facilities.",
      category: "healthcare",
      type: "story",
      date: "2024-01-05",
      readTime: "4 min read",
      author: "Dr. Salma Khan",
      image: "/images/blog/medical-camp.jpg",
      featured: false,
      views: 987,
      comments: 18
    },
    {
      id: 6,
      title: "Digital Literacy Program for Rural Youth",
      excerpt: "Launching our new digital literacy initiative to train 500 young people from rural areas in basic computer skills and online safety.",
      category: "education",
      type: "news",
      date: "2024-01-03",
      readTime: "3 min read",
      author: "Rafiq Islam",
      image: "/images/blog/digital-literacy.jpg",
      featured: false,
      views: 765,
      comments: 12
    },
    {
      id: 7,
      title: "Clean Water Project Completes Phase 2",
      excerpt: "Phase 2 of our clean water initiative has been completed, providing access to safe drinking water for 5 additional villages.",
      category: "community",
      type: "update",
      date: "2024-01-01",
      readTime: "3 min read",
      author: "Tasnim Fatima",
      image: "/images/blog/water-project.jpg",
      featured: false,
      views: 654,
      comments: 9
    },
    {
      id: 8,
      title: "Meet Ayesha: From Student to Teacher",
      excerpt: "Inspiring story of Ayesha, who went from being a scholarship recipient to becoming a teacher in her community through our education program.",
      category: "success-stories", 
      type: "story",
      date: "2023-12-28",
      readTime: "6 min read",
      author: "Prof. Naim Ahmed",
      image: "/images/blog/student-story.jpg",
      featured: true,
      views: 1876,
      comments: 37
    }
  ]

  // Pagination calculation
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="blog-grid">
      {/* Featured Posts */}
      <div className="featured-posts">
        <h3 className="section-title">Featured Stories</h3>
        <div className="featured-grid">
          {blogPosts.filter(post => post.featured).slice(0, 2).map(post => (
            <div key={post.id} className="featured-card">
              <div className="featured-image">
                <div className="image-placeholder">
                  {post.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </div>
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <span className="category-tag">{post.category}</span>
                  <span className="post-date">{formatDate(post.date)}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="author">By {post.author}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <div className="post-stats">
                  <span className="stat">👁️ {post.views} views</span>
                  <span className="stat">💬 {post.comments} comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Posts Grid */}
      <div className="all-posts">
        <h3 className="section-title">Latest Updates</h3>
        <div className="posts-grid">
          {currentPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-image">
                <div className="image-placeholder">
                  {post.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </div>
              </div>
              
              <div className="post-content">
                <div className="post-meta">
                  <span className="category-tag">{post.category}</span>
                  <span className="post-type">{post.type}</span>
                </div>
                
                <h4 className="post-title">{post.title}</h4>
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-footer">
                  <div className="post-info">
                    <span className="post-date">{formatDate(post.date)}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <div className="post-stats">
                    <span className="stat">👁️ {post.views}</span>
                    <span className="stat">💬 {post.comments}</span>
                  </div>
                </div>
                
                <button className="read-more-btn">Read Full Story →</button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>
            
            <div className="page-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`page-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button 
              className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}