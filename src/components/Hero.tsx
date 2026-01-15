import { useState, useEffect } from 'react'
import { NetworkBackground } from './NetworkBackground'
import { useParallax } from '../hooks/useScrollReveal'

// Animated SVG icons for the "Why Polaris" section
const whyPolarisItems = [
    {
        label: 'Microsoft-Trained Expertise',
        icon: (
            <svg className="w-6 h-6 icon-animated" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        )
    },
    {
        label: 'Risk-Focused Approach',
        icon: (
            <svg className="w-6 h-6 icon-animated" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        label: 'Scalable 20-100 Users',
        icon: (
            <svg className="w-6 h-6 icon-animated" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        label: 'Senior Technical Advisors',
        icon: (
            <svg className="w-6 h-6 icon-animated" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
]

// Typing effect hook
function useTypingEffect(text: string, speed: number = 50, delay: number = 500) {
    const [displayText, setDisplayText] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        let timeout: ReturnType<typeof setInterval>
        let charIndex = 0

        const startTyping = () => {
            timeout = setInterval(() => {
                if (charIndex <= text.length) {
                    setDisplayText(text.slice(0, charIndex))
                    charIndex++
                } else {
                    clearInterval(timeout)
                    setIsComplete(true)
                }
            }, speed)
        }

        const delayTimeout = setTimeout(startTyping, delay)

        return () => {
            clearTimeout(delayTimeout)
            clearInterval(timeout)
        }
    }, [text, speed, delay])

    return { displayText, isComplete }
}

// Magnetic button component
function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        setPosition({ x: x * 0.15, y: y * 0.15 })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <a
            href={href}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: position.x === 0 ? 'transform 0.3s ease' : 'transform 0.1s ease'
            }}
        >
            {children}
        </a>
    )
}

export function Hero() {
    const { displayText, isComplete } = useTypingEffect('Right-Sized for You.', 60, 800)
    const parallaxRef = useParallax(0.3)

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1424] to-[#0a1628]" />

                {/* Parallax floating orbs */}
                <div ref={parallaxRef} className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-600/5 rounded-full blur-[80px]" />
                </div>

                {/* Interactive Network Animation */}
                <NetworkBackground />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} aria-hidden="true" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" aria-hidden="true" />
                        <span className="text-sm text-gray-300 tracking-wide">Microsoft-Trained Security Experts</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-in-up">
                        <span className="text-white">Enterprise IT.</span>
                        <br />
                        <span className="gradient-text-animated">
                            {displayText}
                            {!isComplete && <span className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 animate-pulse" />}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Enterprise-grade IT management and cybersecurity for organizations with 20-100 users.
                        <span className="text-white"> Reliability and leadership without enterprise overhead.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <MagneticButton
                            href="#contact"
                            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1 active:scale-95 glow-border-hover"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Talk to an Expert
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </MagneticButton>
                        <MagneticButton
                            href="#services"
                            className="px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300 active:scale-95"
                        >
                            Explore Services
                        </MagneticButton>
                    </div>

                    {/* Why Polaris - with SVG icons */}
                    <div className="mt-20 pt-12 border-t border-white/5 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Why Polaris</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {whyPolarisItems.map((item, idx) => (
                                <div
                                    key={item.label}
                                    className={`flex flex-col items-center gap-3 text-gray-400 group stagger-${idx + 1}`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-cyan-500/20 group-hover:to-blue-600/20 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-medium text-center group-hover:text-white transition-colors">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    )
}
