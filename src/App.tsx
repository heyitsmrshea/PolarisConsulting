import { useState, useEffect, useRef } from 'react'
import './App.css'

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(!startOnView)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted, startOnView])

  useEffect(() => {
    if (!hasStarted) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [hasStarted, end, duration])

  return { count, ref }
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stat1 = useCountUp(150, 2000)
  const stat2 = useCountUp(100, 2000)
  const stat3 = useCountUp(99, 2000)
  const stat4 = useCountUp(15, 2000)

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white overflow-x-hidden">
      {/* Premium Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center gap-3 group">
              <img src="/PolarisConsulting/logo-icon.svg" alt="Polaris" className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-white">Polaris</span>
                <span className="text-cyan-400 ml-1 opacity-80">Consulting</span>
              </span>
            </a>
            
            <div className="hidden lg:flex items-center gap-8">
              {['Services', 'Industries', 'Results', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide uppercase"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact"
                className="ml-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started
              </a>
            </div>

            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0f1a]/98 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="px-6 py-8 space-y-6">
            {['Services', 'Industries', 'Results', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block text-lg text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1424] to-[#0a1628]" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-600/5 rounded-full blur-[80px]" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300 tracking-wide">Senior-Led Cybersecurity & IT Services</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-in-up">
              <span className="text-white">Enterprise Security.</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Without the Enterprise.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We deliver senior-level cybersecurity expertise to organizations with 20-150 users. 
              <span className="text-white"> Real protection. Real expertise. Right-sized pricing.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center gap-2">
                  Talk to an Expert
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a 
                href="#services"
                className="px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-20 pt-12 border-t border-white/5 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Trusted Security Standards</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {[
                  { label: 'SOC 2 Type II', icon: '🛡️' },
                  { label: 'Microsoft 365', icon: '☁️' },
                  { label: 'Entra ID', icon: '🔐' },
                  { label: 'HIPAA Ready', icon: '🏥' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-gray-400">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0d1424]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: stat1.count, suffix: '+', label: 'Organizations Protected', ref: stat1.ref },
              { value: stat2.count, suffix: '%', label: 'First-Attempt SOC 2 Pass', ref: stat2.ref },
              { value: stat3.count, suffix: '.9%', label: 'Uptime Guaranteed', ref: stat3.ref },
              { value: stat4.count, suffix: 'min', label: 'Avg Response Time', ref: stat4.ref },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                ref={stat.ref}
                className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Security & IT
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything your growing organization needs—delivered by senior practitioners, not junior technicians.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Security Operations',
                description: '24/7 threat monitoring, incident response, and proactive security measures.',
                features: ['SIEM & SOC', 'Threat Detection', 'Incident Response']
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: 'Microsoft 365 & Cloud',
                description: 'Expert management of your entire Microsoft ecosystem.',
                features: ['M365 Admin', 'Entra ID', 'Teams & SharePoint']
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Compliance & Governance',
                description: 'Navigate SOC 2, HIPAA, and regulatory requirements with confidence.',
                features: ['SOC 2 Prep', 'Policy Development', 'Audit Support']
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Endpoint Management',
                description: 'Modern device management keeping your fleet secure and compliant.',
                features: ['Intune/MDM', 'Zero Trust', 'Policy Enforcement']
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                ),
                title: 'Backup & Recovery',
                description: 'Comprehensive data protection and disaster recovery planning.',
                features: ['Daily Backups', 'DR Planning', 'RTO/RPO Optimization']
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Fractional CISO',
                description: 'Executive-level security leadership without the executive price tag.',
                features: ['Security Strategy', 'Board Reporting', 'Risk Assessment']
              },
            ].map((service, idx) => (
              <div 
                key={idx}
                className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 text-xs text-cyan-400 bg-cyan-400/10 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="relative py-32 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Industries</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for Regulated & Growing Organizations
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We specialize in organizations with 20-150 users across industries where security and compliance aren't optional—they're essential.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: '🏥', name: 'Healthcare & Clinics', desc: 'HIPAA-compliant security for patient data' },
                  { icon: '💼', name: 'Professional Services', desc: 'Finance, legal, and accounting firms' },
                  { icon: '🏭', name: 'Manufacturing', desc: 'OT/IT convergence and industrial security' },
                  { icon: '🏛️', name: 'Government & Regulated', desc: 'Compliance-focused IT for public sector' },
                  { icon: '🤝', name: 'Nonprofits', desc: 'Mission-driven organizations on a budget' },
                ].map((industry, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <span className="text-3xl">{industry.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white">{industry.name}</h4>
                      <p className="text-sm text-gray-500">{industry.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl opacity-30" />
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    All Systems Operational
                  </div>
                  <h3 className="text-2xl font-bold">Security Dashboard</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/[0.03]">
                    <span className="text-gray-400">Threats Blocked (24h)</span>
                    <span className="text-2xl font-bold text-cyan-400">1,247</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/[0.03]">
                    <span className="text-gray-400">Endpoints Monitored</span>
                    <span className="text-2xl font-bold text-cyan-400">892</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/[0.03]">
                    <span className="text-gray-400">Active Incidents</span>
                    <span className="text-2xl font-bold text-green-400">0</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/[0.03]">
                    <span className="text-gray-400">Compliance Score</span>
                    <span className="text-2xl font-bold text-cyan-400">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Testimonials */}
      <section id="results" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Client Results</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Polaris helped us pass our SOC 2 audit on the first attempt. Their expertise saved us months of work and gave our clients confidence.",
                author: "Sarah Chen",
                role: "CTO",
                company: "HealthTech Startup"
              },
              {
                quote: "We finally have enterprise-grade security without the enterprise price tag. Their team feels like an extension of our own.",
                author: "Michael Torres",
                role: "VP of Operations",
                company: "Regional Law Firm"
              },
              {
                quote: "After a ransomware scare with our previous provider, Polaris rebuilt our security from the ground up. We sleep better now.",
                author: "Jennifer Walsh",
                role: "Executive Director",
                company: "Healthcare Nonprofit"
              },
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 hover:border-cyan-500/20 transition-all duration-500"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Elevate Your Security?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Schedule a consultation with a senior security advisor. No sales pitch—just a conversation about your needs.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0a0f1a] rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
          >
            Schedule Your Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-[#0d1424]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Talk Security
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Ready to strengthen your security posture? Our senior advisors are here to help you navigate the complexities of modern IT security.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <a href="mailto:info@polarisconsulting.net" className="text-white hover:text-cyan-400 transition-colors">
                      info@polarisconsulting.net
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <span className="text-white">Serving clients across the United States</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">How can we help?</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/PolarisConsulting/logo-icon.svg" alt="Polaris" className="h-8 w-8" />
              <span className="text-gray-400">© 2025 Polaris Consulting. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms</a>
              <a href="mailto:info@polarisconsulting.net" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
