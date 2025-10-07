import '../../styles/faq/FAQContact.css'

export default function FAQContact() {
  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Support',
      description: 'Speak directly with our support team',
      details: '+880 XXXX-XXXXXX',
      action: 'Call Now',
      type: 'phone'
    },
    {
      icon: '📧',
      title: 'Email Support', 
      description: 'Send us a detailed message',
      details: 'support@sabilillah.org',
      action: 'Send Email',
      type: 'email'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Instant help during business hours',
      details: 'Available 9AM - 6PM',
      action: 'Start Chat',
      type: 'chat'
    },
    {
      icon: '👥',
      title: 'Visit Office',
      description: 'Meet us in person',
      details: 'Dhaka Head Office',
      action: 'Get Directions',
      type: 'visit'
    }
  ]

  const popularTopics = [
    { name: 'Donation Process', count: 45 },
    { name: 'Project Updates', count: 32 },
    { name: 'Volunteer Opportunities', count: 28 },
    { name: 'Financial Transparency', count: 23 },
    { name: 'Emergency Response', count: 19 },
    { name: 'Education Programs', count: 17 }
  ]

  return (
    <section className="faq-contact">
      <div className="contact-header">
        <h2>Still Need Help?</h2>
        <p>We're here to assist you with any other questions or concerns</p>
      </div>

      <div className="contact-methods-grid">
        {contactMethods.map((method, index) => (
          <div key={index} className="contact-method-card">
            <div className="method-icon">{method.icon}</div>
            <div className="method-content">
              <h3>{method.title}</h3>
              <p className="method-description">{method.description}</p>
              <p className="method-details">{method.details}</p>
              <button className={`action-btn ${method.type}`}>
                {method.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="additional-help">
        <div className="help-columns">
          <div className="help-column">
            <h3>Popular Help Topics</h3>
            <div className="topics-list">
              {popularTopics.map((topic, index) => (
                <div key={index} className="topic-item">
                  <span className="topic-name">{topic.name}</span>
                  <span className="topic-count">{topic.count} questions</span>
                </div>
              ))}
            </div>
          </div>

          <div className="help-column">
            <h3>Quick Resources</h3>
            <div className="resources-list">
              <a href="/donation" className="resource-link">
                💰 Donation Guide
              </a>
              <a href="/transparency" className="resource-link">
                📊 Annual Reports
              </a>
              <a href="/projects" className="resource-link">
                🚀 Project Updates
              </a>
              <a href="/volunteer" className="resource-link">
                👥 Volunteer Handbook
              </a>
            </div>
          </div>

          <div className="help-column">
            <h3>Support Hours</h3>
            <div className="support-hours">
              <div className="hour-item">
                <span className="day">Sunday - Thursday</span>
                <span className="time">9:00 AM - 6:00 PM</span>
              </div>
              <div className="hour-item">
                <span className="day">Friday</span>
                <span className="time">9:00 AM - 12:00 PM</span>
              </div>
              <div className="hour-item">
                <span className="day">Saturday</span>
                <span className="time">Closed</span>
              </div>
              <div className="emergency-note">
                <strong>Emergency Support:</strong> Available 24/7 for urgent matters
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-section">
        <div className="feedback-card">
          <div className="feedback-header">
            <div className="feedback-icon">💡</div>
            <div>
              <h3>Help Us Improve</h3>
              <p>Suggest new questions or provide feedback on our FAQ section</p>
            </div>
          </div>
          <div className="feedback-actions">
            <button className="suggestion-btn">Suggest a Question</button>
            <button className="feedback-btn">Give Feedback</button>
          </div>
        </div>
      </div>
    </section>
  )
}