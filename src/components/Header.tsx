import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const basePath = import.meta.env.BASE_URL

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-[#0a0f1a]/95 dark:bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-white/5 dark:border-white/5 py-4'
                : 'bg-transparent py-6'
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src={`${basePath}logo-icon.svg`}
                            alt="Polaris Consulting logo"
                            className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-xl font-semibold tracking-tight">
                            <span className="text-white dark:text-white">Polaris</span>
                            <span className="text-cyan-400 ml-1 opacity-80">Consulting</span>
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {['Services', 'Industries', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-300 tracking-wide uppercase"
                            >
                                {item}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="ml-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold text-white tracking-wide uppercase hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="lg:hidden">
                        <button
                            className="p-2 text-white dark:text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenuOpen}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0f1a]/98 dark:bg-[#0a0f1a]/98 backdrop-blur-xl border-b border-white/5 dark:border-white/5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="px-6 py-8 space-y-6">
                    {['Services', 'Industries', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block text-lg text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    )
}
