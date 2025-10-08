"use client";
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const whatsappNumber = "+8801644793189";
  const whatsappMessage = "Hello, I need help!";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#25D366',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#128C7E';
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#25D366';
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
      }}
    >
      <FaWhatsapp size={24} />
      Chat with Us
    </a>
  );
}