import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorksSection from '../components/HowItWorks'
import Industries from '../components/Industries'
import Pricing from '../components/Pricing'
import Download from '../components/Download'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorksSection />
      <Industries />
      <Pricing />
      <Download />
    </>
  )
}