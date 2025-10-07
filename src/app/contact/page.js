import ContactHero from '../../components/contact/ContactHero'
import ContactInfo from '../../components/contact/ContactInfo'
import ContactForm from '../../components/contact/ContactForm'
import ContactMap from '../../components/contact/ContactMap'
import '../../styles/ContactLayout.css'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'    

export default function Contact() {
  return (
    <main>
        <Navbar />  
      <ContactHero />
      <div className="container">
        <div className="contact-layout">
          <div className="contact-form-section">
            <ContactForm />
          </div>
          <div className="contact-sidebar">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
        <Footer />  
    </main>
  )
}