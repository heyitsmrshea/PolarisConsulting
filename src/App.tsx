import { HashRouter, Routes, Route } from 'react-router-dom'
import {
  Header,
  Hero,
  Services,
  Industries,
  Partners,
  CTA,
  Contact,
  Footer,
  ThemeProvider,
  TrustBar,
  Testimonials,
  Process,
  FAQ,
  LeadMagnet,
  Pricing,
  ScrollProgress
} from './components'
import { Privacy, Terms } from './pages'
import './App.css'

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <LeadMagnet />
      <Process />
      <Partners />
      <Testimonials />
      <Pricing />
      <Industries />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f1a] text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
          <ScrollProgress />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
