import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './lib/LangContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <div style={{ background: '#F7F8F6', minHeight: '100vh' }}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LangProvider>
  )
}