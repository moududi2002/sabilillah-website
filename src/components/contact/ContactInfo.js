import '../../styles/contact/ContactInfo.css'

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      details: '+880 XXXX-XXXXXX',
      description: 'Available Sunday to Thursday, 9AM - 6PM',
      type: 'phone'
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: 'info@sabilillah.org',
      description: 'We respond within 2 hours during business days',
      type: 'email'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Foundation Road, Dhaka 1216',
      description: 'Our main office in Dhaka, Bangladesh',
      type: 'location'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Available on Website',
      description: 'Instant support during business hours',
      type: 'chat'
    }
  ]

  const officeHours = [
    { day: 'Sunday - Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 12:00 PM' },
    { day: 'Saturday', hours: 'Closed' }
  ]

  return (
    <section className="contact-info">
      <div className="info-card">
        <h3>Contact Information</h3>
        <p>Choose your preferred way to reach out to us</p>
        
        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-method">
              <div className="method-icon">{method.icon}</div>
              <div className="method-details">
                <h4>{method.title}</h4>
                <p className="method-info">{method.details}</p>
                <p className="method-desc">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="office-hours">
          <h4>Office Hours</h4>
          <div className="hours-list">
            {officeHours.map((schedule, index) => (
              <div key={index} className="hour-item">
                <span className="day">{schedule.day}</span>
                <span className="hours">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="emergency-contact">
          <div className="emergency-header">
            <span className="emergency-icon">🆘</span>
            <h4>Emergency Contact</h4>
          </div>
          <p>For urgent matters outside office hours</p>
          <p className="emergency-number">+880 XXXX-XXXXXX</p>
        </div>
      </div>
    </section>
  )
}