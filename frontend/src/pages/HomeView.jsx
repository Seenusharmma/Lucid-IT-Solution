import Hero from '../components/home/Hero'
import TrustedClients from '../components/home/TrustedClients'
import Solutions from '../components/home/Solutions'
import Architecture from '../components/home/Architecture'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import CtaBanner from '../components/home/CtaBanner'

export default function HomeView() {
  return (
    <main id="view-home" className="view-fade pt-[60px] sm:pt-[68px]">
      <Hero />
      <TrustedClients />
      <Solutions />
      <Architecture />
      <Testimonials />
      <FAQ />
      <CtaBanner />
    </main>
  )
}
