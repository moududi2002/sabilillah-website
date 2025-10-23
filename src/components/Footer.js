import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sabilillah Foundation</h3>
            <p>Serving humanity with compassion and faith since 2020. Join us in making a difference in people's lives.</p>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">YouTube</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/campaigns">Our Causes</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Programs</h4>
            <ul className="footer-links">
              <li><a href="#">Emergency Relief</a></li>
              <li><a href="#">Education Support</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Orphan Care</a></li>
              <li><a href="#">Water Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                📧{" "}
                <a
                  href="mailto:contact@sabilillah.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  contact@sabilillahfoundation.org
                </a>
              </p>

              <p>📞 +880 1910-649179 </p>
              <p>📍 Kalukhali, Rajbari, Bangladesh - 7722 </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025-{new Date().getFullYear()} Sabilillah Foundation. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Transparency Report</a>
          </div>
        </div>
      </div>
    </footer>
  )
}