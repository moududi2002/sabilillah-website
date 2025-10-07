import '../../styles/blog/BlogHero.css'

export default function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="container">
        <div className="hero-content">
          <h1>Updates & Stories</h1>
          <p>Read the latest news, success stories, and updates from our projects across Bangladesh</p>
          <div className="hero-stats">
            <div className="stat statText">
              <span className="number">150+</span>
              <span className="label">Articles Published</span>
            </div>
            <div className="stat statText">
              <span className="number">25K+</span>
              <span className="label">Monthly Readers</span>
            </div>
            <div className="stat statText">
              <span className="number">12</span>
              <span className="label">Categories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}