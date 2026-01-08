import { NetworkBackground } from './NetworkBackground'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1424] to-[#0a1628]" />
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-600/5 rounded-full blur-[80px]" />

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
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Right-Sized for You.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Enterprise-grade IT management and cybersecurity for organizations with 20-100 users.
                        <span className="text-white"> Reliability and leadership without enterprise overhead.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="#contact"
                            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1 active:scale-95"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Talk to an Expert
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300 active:scale-95"
                        >
                            Explore Services
                        </a>
                    </div>

                    {/* Why Polaris */}
                    <div className="mt-20 pt-12 border-t border-white/5 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Why Polaris</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {[
                                { label: 'Microsoft-Trained Expertise', icon: '🎓' },
                                { label: 'Risk-Focused Approach', icon: '🎯' },
                                { label: 'Scalable 20-100 Users', icon: '📈' },
                                { label: 'Senior Technical Advisors', icon: '👨‍💼' },
                            ].map((item) => (
                                <div key={item.label} className="flex flex-col items-center gap-2 text-gray-400">
                                    <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                                    <span className="text-xs font-medium text-center">{item.label}</span>
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
