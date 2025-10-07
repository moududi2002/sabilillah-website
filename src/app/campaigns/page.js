import CampaignsHero from '../../components/campaigns/CampaignsHero'
import CampaignStats from '../../components/campaigns/CampaignStats'
import CampaignsFilter from '../../components/campaigns/CampaignsFilter'
import ActiveCampaigns from '../../components/campaigns/ActiveCampaigns'
import CompletedCampaigns from '../../components/campaigns/CompletedCampaigns'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Campaigns() {
  return (
    <main>
      <Navbar />
      <CampaignsHero />
      <CampaignStats />
      <CampaignsFilter />
      <ActiveCampaigns />
      <CompletedCampaigns />
      <Footer />  
    </main>
  )
}