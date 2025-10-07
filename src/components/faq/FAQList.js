'use client'
import { useState } from 'react'
import '../../styles/faq/FAQList.css'

export default function FAQList() {
  const [activeCategory, setActiveCategory] = useState('donation')
  const [openQuestion, setOpenQuestion] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const faqData = {
    donation: [
      {
        id: 1,
        question: "How can I donate to Sabilillah Foundation?",
        answer: "You can donate through multiple methods: online via our website using credit/debit cards, through mobile banking (bKash, Nagad, Rocket), bank transfer, or in person at our offices. All methods are secure and transparent.",
        tags: ["payment", "online", "mobile"]
      },
      {
        id: 2,
        question: "Is my donation tax-deductible?",
        answer: "Yes, all donations to Sabilillah Foundation are tax-deductible under Bangladesh tax laws. We provide official donation receipts that you can use for tax purposes. Please keep your transaction records for reference.",
        tags: ["tax", "receipt"]
      },
      {
        id: 3,
        question: "Can I set up recurring monthly donations?",
        answer: "Absolutely! We offer monthly donation options where you can set a fixed amount to be automatically deducted each month. This helps us plan long-term projects better. You can manage or cancel your recurring donations anytime.",
        tags: ["monthly", "recurring"]
      },
      {
        id: 4,
        question: "What percentage of my donation goes to administrative costs?",
        answer: "We maintain a strict policy where 85-90% of all donations go directly to program activities. Only 10-15% is used for administrative and operational costs. We publish detailed financial reports annually for full transparency.",
        tags: ["transparency", "costs"]
      },
      {
        id: 5,
        question: "Can I donate specifically to a particular project?",
        answer: "Yes, you can designate your donation to specific projects like education, healthcare, or emergency relief. During the donation process, you'll have the option to choose where your funds should be allocated.",
        tags: ["specific", "projects"]
      }
    ],
    projects: [
      {
        id: 6,
        question: "How do you select which projects to undertake?",
        answer: "We conduct thorough needs assessments in communities, consult with local leaders, and prioritize based on urgency, impact potential, and available resources. Our project selection committee includes community representatives.",
        tags: ["selection", "assessment"]
      },
      {
        id: 7,
        question: "Can I visit the projects I've supported?",
        answer: "Yes! We encourage donors to visit our project sites. Please contact us in advance to schedule a visit. We can arrange guided tours and meetings with beneficiaries.",
        tags: ["visit", "sites"]
      },
      {
        id: 8,
        question: "How long do typical projects last?",
        answer: "Project durations vary: emergency relief (1-6 months), education programs (1-5 years), healthcare initiatives (ongoing), and community development (2-5 years). We provide regular updates on project timelines.",
        tags: ["duration", "timeline"]
      }
    ],
    transparency: [
      {
        id: 9,
        question: "How can I verify how my donation was used?",
        answer: "We provide detailed impact reports for all major projects. Donors receive updates via email and can access comprehensive reports on our website. We also conduct independent audits annually.",
        tags: ["verification", "reports"]
      },
      {
        id: 10,
        question: "Are your financial reports publicly available?",
        answer: "Yes, our annual financial reports, audit statements, and project expenditure details are publicly available on our website. We believe in complete transparency and accountability.",
        tags: ["financial", "reports"]
      }
    ]
  }

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  const currentFAQs = faqData[activeCategory] || []

  return (
    <section className="faq-list">
      <div className="faq-header">
        <h2>Common Questions</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>

      <div className="faq-content">
        {currentFAQs.length > 0 ? (
          <div className="questions-list">
            {currentFAQs.map(faq => (
              <div key={faq.id} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleQuestion(faq.id)}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className={`toggle-icon ${openQuestion === faq.id ? 'open' : ''}`}>
                    {openQuestion === faq.id ? '−' : '+'}
                  </span>
                </button>
                
                {openQuestion === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                    {faq.tags && faq.tags.length > 0 && (
                      <div className="faq-tags">
                        {faq.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                    <div className="helpful-section">
                      <span>Was this helpful?</span>
                      <div className="helpful-buttons">
                        <button className="helpful-btn">👍 Yes</button>
                        <button className="helpful-btn">👎 No</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">❓</div>
            <h3>No questions found</h3>
            <p>Try selecting a different category or searching for specific terms</p>
          </div>
        )}

        {/* Still Need Help Section */}
        <div className="still-help-section">
          <div className="help-card">
            <div className="help-icon">💬</div>
            <div className="help-content">
              <h3>Still have questions?</h3>
              <p>Can't find the answer you're looking for? Our support team is here to help.</p>
              <div className="help-actions">
                <button className="contact-btn">Contact Support</button>
                <button className="live-chat-btn">Start Live Chat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}