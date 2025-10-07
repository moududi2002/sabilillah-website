import AboutHero from '../../components/about/AboutHero'
import MissionVision from '../../components/about/MissionVision'
import HistoryTimeline from '../../components/about/HistoryTimeline'
import TeamGrid from '../../components/about/TeamGrid'
import DonorCategories from '../../components/about/DonorCategories'
import Partners from '../../components/about/Partners'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'    

export default function AboutUs() {
  return (
    <main>
      <Navbar/>
      <AboutHero />
      <MissionVision />
      <HistoryTimeline />
      <TeamGrid />
      <DonorCategories />
      <Partners />
      <Footer />
    </main>
  )
}