"use client";
import { useState } from 'react'
import '../styles/Navbar.css'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
       
        <Link href="/" className="skip-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          {/* Logo */} 
          <div className="logo">
            <img src="/images/logo.svg" alt="Sabilillah Foundation" className="logo-image" />
            <span>Sabilillah Foundation</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/campaigns">Causes</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        {/* Donate Button */}
        <button className="donate-btn" onClick={() => window.location.href = "/donation"}>Donate Now</button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/campaigns" onClick={() => setIsMenuOpen(false)}>Causes</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}