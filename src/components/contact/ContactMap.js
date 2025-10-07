'use client'
import { useState } from 'react'
import '../../styles/contact/ContactMap.css'

export default function ContactMap() {
  const [activeLocation, setActiveLocation] = useState('dhaka')

  const locations = [
    {
      id: 'dhaka',
      name: 'Dhaka Head Office',
      address: '123 Foundation Road, Dhaka 1216, Bangladesh',
      phone: '+880 XXXX-XXXXXX',
      email: 'dhaka@sabilillah.org',
      hours: '9:00 AM - 6:00 PM',
      coordinates: { lat: 23.8103, lng: 90.4125 }
    },
    {
      id: 'chittagong',
      name: 'Chittagong Branch',
      address: '456 Marine Drive, Chittagong 4000, Bangladesh',
      phone: '+880 XXXX-XXXXXX', 
      email: 'chittagong@sabilillah.org',
      hours: '9:00 AM - 5:00 PM',
      coordinates: { lat: 22.3569, lng: 91.7832 }
    },
    {
      id: 'sylhet',
      name: 'Sylhet Regional Office',
      address: '789 Tea Garden Road, Sylhet 3100, Bangladesh',
      phone: '+880 XXXX-XXXXXX',
      email: 'sylhet@sabilillah.org',
      hours: '9:00 AM - 5:00 PM',
      coordinates: { lat: 24.8949, lng: 91.8687 }
    }
  ]

  const activeLocationData = locations.find(loc => loc.id === activeLocation)

  return (
    <section className="contact-map">
      <div className="map-card">
        <div className="map-header">
          <h3>Our Offices</h3>
          <p>Visit us at any of our locations across Bangladesh</p>
        </div>

        {/* Location Selector */}
        <div className="location-selector">
          {locations.map(location => (
            <button
              key={location.id}
              className={`location-btn ${activeLocation === location.id ? 'active' : ''}`}
              onClick={() => setActiveLocation(location.id)}
            >
              {location.name}
            </button>
          ))}
        </div>

        {/* Map Container */}
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-overlay">
              <span className="map-pin">📍</span>
              <h4>Interactive Map</h4>
              <p>Google Maps integration would show here</p>
              <div className="map-coordinates">
                <span>Lat: {activeLocationData.coordinates.lat}</span>
                <span>Lng: {activeLocationData.coordinates.lng}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Location Details */}
        <div className="location-details">
          <div className="detail-item">
            <span className="detail-icon">🏢</span>
            <div className="detail-content">
              <h4>{activeLocationData.name}</h4>
              <p>{activeLocationData.address}</p>
            </div>
          </div>

          <div className="detail-grid">
            <div className="detail-item small">
              <span className="detail-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>{activeLocationData.phone}</p>
              </div>
            </div>

            <div className="detail-item small">
              <span className="detail-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>{activeLocationData.email}</p>
              </div>
            </div>

            <div className="detail-item small">
              <span className="detail-icon">🕒</span>
              <div>
                <strong>Hours</strong>
                <p>{activeLocationData.hours}</p>
              </div>
            </div>

            <div className="detail-item small">
              <span className="detail-icon">🚗</span>
              <div>
                <strong>Parking</strong>
                <p>Available</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="map-actions">
            <button className="action-btn primary">
              📍 Get Directions
            </button>
            <button className="action-btn secondary">
              📞 Call Office
            </button>
          </div>

          {/* Transportation Info */}
          <div className="transportation-info">
            <h5>How to Reach</h5>
            <div className="transport-methods">
              <div className="transport-item">
                <span className="transport-icon">🚇</span>
                <span>Metro: 5 min walk</span>
              </div>
              <div className="transport-item">
                <span className="transport-icon">🚌</span>
                <span>Bus stop nearby</span>
              </div>
              <div className="transport-item">
                <span className="transport-icon">🚕</span>
                <span>Taxi available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}