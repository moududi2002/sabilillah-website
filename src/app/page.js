import Navbar from '../components/Navbar'
import Campaigns from '../components/Campaigns'
import AboutSection from '../components/AboutSection'
import ImpactSection from '../components/ImpactSection'
import TeamSection from '../components/TeamSection'
import DonationSection from '../components/DonationSection'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import Link from "next/link";



export default function Home() {
  return (
    <main>
      <Navbar />
      
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Sabilillah Foundation</h1>
          <p className="hero-subtitle">Serving Humanity with Compassion and Faith</p>
          <div className="hero-buttons">
            <Link href="/donation">
                <button className="btn-primary">Donate Now</button>
            </Link>
            <Link href="/about-us">
                <button className="btn-secondary">Our Mission</button>
            </Link>
            </div>
        </div>
      </section>

      <Campaigns />
      <AboutSection />
      <ImpactSection/>
      <TeamSection />
      <DonationSection />
      <Testimonials />
        <Newsletter />
        <Footer />  
    </main>
  )
}