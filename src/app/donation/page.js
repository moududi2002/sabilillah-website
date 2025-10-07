import DonationHero from '../../components/donation/DonationHero'
import DonationForm from '../../components/donation/DonationForm'
import PaymentMethods from '../../components/donation/PaymentMethods'
import SecurityBadge from '../../components/donation/SecurityBadge'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Donation() {
  return (
    <main>
        <Navbar />
      <DonationHero />
      <DonationForm />
      <PaymentMethods />
      <SecurityBadge />
        <Footer />
    </main>
  )
}