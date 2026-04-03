import { LangProvider } from './lib/LangContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Industries from './components/Industries'
import Pricing from './components/Pricing'
import Download from './components/Download'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <div style={{ background: '#F7F8F6', minHeight: '100vh' }}>
        <Nav />
        <Hero />
        <Features />
        <HowItWorks />
        <Industries />
        <Pricing />
        <Download />
        <Footer />
      </div>
    </LangProvider>
  )
}