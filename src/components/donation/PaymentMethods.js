'use client'
import { useState } from 'react'
import '../../styles/donation/PaymentMethods.css'

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState('bkash')

  const paymentMethods = [
    {
      id: 'bkash',
      name: 'bKash',
      icon: '📱',
      description: 'Instant payment via bKash mobile banking',
      steps: ['Go to your bKash app', 'Send money to 017XX-XXXXXX', 'Enter the reference code'],
      number: '017XX-XXXXXX',
      type: 'Personal'
    },
    {
      id: 'nagad',
      name: 'Nagad',
      icon: '💳', 
      description: 'Quick payment through Nagad wallet',
      steps: ['Open Nagad app', 'Send money to 017XX-XXXXXX', 'Use reference: DONATION'],
      number: '017XX-XXXXXX',
      type: 'Personal'
    },
    {
      id: 'rocket',
      name: 'Rocket',
      icon: '🚀',
      description: 'Easy payment via DBBL Rocket',
      steps: ['Dial *322# from your mobile', 'Send money to 017XX-XXXXXX', 'Enter reference number'],
      number: '017XX-XXXXXX',
      type: 'Personal'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: '💳',
      description: 'Secure online card payment',
      steps: ['Enter card details', 'Verify with OTP', 'Complete payment'],
      number: '',
      type: 'International'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: '🌐',
      description: 'International payments via PayPal',
      steps: ['Login to PayPal', 'Send to donate@sabilillah.org', 'Complete transaction'],
      number: 'donate@sabilillah.org',
      type: 'International'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: '🏦',
      description: 'Direct bank transfer',
      steps: ['Transfer to our bank account', 'Use transaction ID as reference', 'Email us the receipt'],
      number: 'XXXX-XXXX-XXXX-XXXX',
      type: 'Bank'
    }
  ]

  const selectedPayment = paymentMethods.find(method => method.id === selectedMethod)

  return (
    <section className="payment-methods">
      <div className="container">
        <div className="payment-header">
          <h2>Choose Payment Method</h2>
          <p>Select your preferred way to donate securely</p>
        </div>

        <div className="payment-content">
          {/* Payment Method Selection */}
          <div className="method-selection">
            <div className="method-grid">
              {paymentMethods.map(method => (
                <div
                  key={method.id}
                  className={`method-card ${selectedMethod === method.id ? 'active' : ''}`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <h4>{method.name}</h4>
                    <span className="method-type">{method.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Method Details */}
          <div className="method-details">
            <div className="details-card">
              <div className="details-header">
                <div className="method-title">
                  <span className="method-icon-large">{selectedPayment.icon}</span>
                  <div>
                    <h3>{selectedPayment.name}</h3>
                    <p>{selectedPayment.description}</p>
                  </div>
                </div>
              </div>

              <div className="payment-steps">
                <h4>How to Pay:</h4>
                <ol className="steps-list">
                  {selectedPayment.steps.map((step, index) => (
                    <li key={index} className="step-item">
                      <span className="step-number">{index + 1}</span>
                      <span className="step-text">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {selectedPayment.number && (
                <div className="payment-info">
                  <div className="info-item">
                    <span className="info-label">
                      {selectedPayment.id === 'paypal' ? 'PayPal Email:' : 'Account Number:'}
                    </span>
                    <span className="info-value">{selectedPayment.number}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Account Type:</span>
                    <span className="info-value">{selectedPayment.type}</span>
                  </div>
                </div>
              )}

              {/* Quick Action Buttons */}
              <div className="payment-actions">
                {selectedPayment.id === 'bkash' && (
                  <button className="action-btn primary">
                    📱 Open bKash App
                  </button>
                )}
                {selectedPayment.id === 'nagad' && (
                  <button className="action-btn primary">
                    💳 Open Nagad App
                  </button>
                )}
                {selectedPayment.id === 'card' && (
                  <button className="action-btn primary">
                    💳 Proceed to Card Payment
                  </button>
                )}
                <button className="action-btn secondary">
                  📧 Email Instructions
                </button>
              </div>

              {/* Security Note */}
              <div className="security-note">
                <div className="security-icon">🔒</div>
                <div>
                  <strong>Secure Payment:</strong> All transactions are encrypted and secure. 
                  We never store your payment details.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}