'use client';
import { useState } from 'react';
import '../styles/DonationSection.css';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const donationOptions = [
    { amount: 500, description: 'Education for one child' },
    { amount: 1000, description: 'Food for a family' },
    { amount: 2500, description: 'Emergency medical help' }
  ];

  const handleDonate = () => {
    const finalAmount = customAmount || selectedAmount;
    if (!finalAmount) {
      alert('Please select or enter an amount');
      return;
    }
    console.log('Donating:', finalAmount);
  };

  return (
    <section className="donation-section">
      <div className="container">
        <div className="donation-header">
          <h2>Your Donation Can Make a Change</h2>
          <p>Your contribution can transform someone's life</p>
        </div>
        
        <div className="donation-options">
          {donationOptions.map((option, index) => (
            <div 
              key={index}
              className={`donation-option ${selectedAmount === option.amount ? 'selected' : ''}`}
              onClick={() => {
                setSelectedAmount(option.amount);
                setCustomAmount('');
              }}
            >
              <div className="amount">₹{option.amount}</div>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
        
        <input 
          type="number" 
          className="custom-amount" 
          placeholder="Enter custom amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
          }}
        />
        
        <button className="donate-now-btn" onClick={handleDonate}>
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default DonationSection;