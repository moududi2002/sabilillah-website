'use client'
import { useState, useEffect } from 'react'
import '../../styles/donation/DonationForm.css'

export default function DonationForm() {
  const [formData, setFormData] = useState({
    donationType: 'one-time',
    campaign: '',
    amount: '',
    customAmount: '',
    frequency: 'monthly',
    name: '',
    email: '',
    phone: '',
    message: '',
    anonymous: false
  })

  const [campaigns, setCampaigns] = useState([])

  // Fetch campaigns data (in real app, this would be from API)
  useEffect(() => {
    const mockCampaigns = [
      { id: 'general', name: 'General Fund - Where Most Needed', description: 'Support our ongoing operational costs and emergency response' },
      { id: 'flood-relief', name: 'Emergency Flood Relief in Sylhet', description: 'Providing immediate aid to flood-affected families', raised: 65 },
      { id: 'education', name: 'Education for 1000 Children', description: 'Sponsoring education for underprivileged children', raised: 40 },
      { id: 'water-project', name: 'Clean Water Project', description: 'Installing tube wells in rural areas', raised: 80 },
      { id: 'healthcare', name: 'Healthcare for Rural Communities', description: 'Free medical camps and medicine', raised: 55 },
      { id: 'orphan-care', name: 'Orphan Support Program', description: 'Comprehensive care for orphaned children', raised: 25 }
    ]
    setCampaigns(mockCampaigns)
  }, [])

  const presetAmounts = [500, 1000, 2000, 5000, 10000]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAmountSelect = (amount) => {
    setFormData(prev => ({
      ...prev,
      amount: amount,
      customAmount: ''
    }))
  }

  const selectedCampaign = campaigns.find(c => c.id === formData.campaign)

  return (
    <section className="donation-form-section">
      <div className="container">
        <div className="form-container">
          <h2>Make Your Donation</h2>
          
          {/* Donation Type Selection */}
          <div className="form-section">
            <label className="section-label">Donation Type</label>
            <div className="type-selector">
              <button
                className={`type-btn ${formData.donationType === 'one-time' ? 'active' : ''}`}
                onClick={() => handleInputChange('donationType', 'one-time')}
              >
                💫 One-Time Donation
              </button>
              <button
                className={`type-btn ${formData.donationType === 'monthly' ? 'active' : ''}`}
                onClick={() => handleInputChange('donationType', 'monthly')}
              >
                🔄 Monthly Support
              </button>
            </div>
          </div>

          {/* Campaign Selection */}
          <div className="form-section">
            <label className="section-label">Select Campaign</label>
            <div className="campaign-selector">
              <select
                value={formData.campaign}
                onChange={(e) => handleInputChange('campaign', e.target.value)}
                className="campaign-dropdown"
              >
                <option value="">Choose a specific campaign...</option>
                {campaigns.map(campaign => (
                  <option key={campaign.id} value={campaign.id}>
                    {campaign.name}
                  </option>
                ))}
              </select>
              
              {selectedCampaign && (
                <div className="campaign-preview">
                  <div className="campaign-info">
                    <h4>{selectedCampaign.name}</h4>
                    <p>{selectedCampaign.description}</p>
                    {selectedCampaign.raised && (
                      <div className="campaign-progress">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{width: `${selectedCampaign.raised}%`}}
                          ></div>
                        </div>
                        <span>{selectedCampaign.raised}% funded</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Donation Amount */}
          <div className="form-section">
            <label className="section-label">Donation Amount (৳)</label>
            <div className="amount-selector">
              <div className="preset-amounts">
                {presetAmounts.map(amount => (
                  <button
                    key={amount}
                    className={`amount-btn ${formData.amount === amount ? 'active' : ''}`}
                    onClick={() => handleAmountSelect(amount)}
                  >
                    ৳{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              
              <div className="custom-amount">
                <label>Or enter custom amount:</label>
                <div className="custom-input-group">
                  <span className="currency-symbol">৳</span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={formData.customAmount}
                    onChange={(e) => {
                      handleInputChange('customAmount', e.target.value)
                      handleInputChange('amount', '')
                    }}
                    className="custom-amount-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Frequency (if monthly donation) */}
          {formData.donationType === 'monthly' && (
            <div className="form-section">
              <label className="section-label">Frequency</label>
              <select
                value={formData.frequency}
                onChange={(e) => handleInputChange('frequency', e.target.value)}
                className="frequency-select"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          )}

          {/* Donor Information */}
          <div className="form-section">
            <label className="section-label">Your Information</label>
            <div className="donor-fields">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="form-input"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="form-input"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="form-input"
              />
              
              <textarea
                placeholder="Optional message (how you heard about us, dedication, etc.)"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="form-textarea"
                rows="3"
              ></textarea>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.anonymous}
                  onChange={(e) => handleInputChange('anonymous', e.target.checked)}
                />
                <span>Make this donation anonymous</span>
              </label>
            </div>
          </div>

          {/* Donation Summary */}
          <div className="donation-summary">
            <h4>Donation Summary</h4>
            <div className="summary-items">
              <div className="summary-item">
                <span>Type:</span>
                <span>{formData.donationType === 'one-time' ? 'One-Time' : 'Monthly'} Donation</span>
              </div>
              {selectedCampaign && (
                <div className="summary-item">
                  <span>Campaign:</span>
                  <span>{selectedCampaign.name}</span>
                </div>
              )}
              <div className="summary-item">
                <span>Amount:</span>
                <span className="amount-display">
                  ৳{(formData.amount || formData.customAmount || 0).toLocaleString()}
                </span>
              </div>
              {formData.donationType === 'monthly' && (
                <div className="summary-item">
                  <span>Frequency:</span>
                  <span>{formData.frequency}</span>
                </div>
              )}
            </div>
          </div>

          <button className="submit-donation-btn">
            {formData.donationType === 'one-time' ? 'Donate Now' : 'Start Monthly Support'}
          </button>
        </div>
      </div>
    </section>
  )
}