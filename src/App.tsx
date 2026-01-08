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
  ThemeProvider
} from './components'
import { Privacy, Terms } from './pages'
import './App.css'

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Partners />
      <Industries />
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
        <div className="min-h-screen bg-[#0a0f1a] dark:bg-[#0a0f1a] bg-gray-50 text-white dark:text-white text-gray-900 overflow-x-hidden transition-colors duration-300">
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
