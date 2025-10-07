import BlogHero from '../../components/blog/BlogHero'
import BlogFilters from '../../components/blog/BlogFilters'
import BlogGrid from '../../components/blog/BlogGrid'
import BlogSidebar from '../../components/blog/BlogSidebar'
import '../../styles/BlogLayout.css'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Blog() {
  return (
    <main>
        <Navbar />
      <BlogHero />
      <div className="container">
        <div className="blog-layout">
          <div className="blog-main">
            <BlogFilters />
            <BlogGrid />
          </div>
          <div className="blog-sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}