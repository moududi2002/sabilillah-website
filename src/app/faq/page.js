import FAQHero from '../../components/faq/FAQHero'
import FAQCategories from '../../components/faq/FAQCategories'
import FAQList from '../../components/faq/FAQList'
import FAQContact from '../../components/faq/FAQContact'

import '../../styles/FAQLayout.css'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function FAQ() {
  return (
    <main>
        <Navbar />  
      <FAQHero />
      <div className="container">
        <div className="faq-layout">
          <div className="faq-sidebar">
            <FAQCategories />
          </div>
          <div className="faq-main">
            <FAQList />
          </div>
        </div>
        <FAQContact />
      </div>
        <Footer />
    </main>
  )
}