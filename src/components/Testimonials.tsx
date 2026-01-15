import { useScrollReveal } from '../hooks/useScrollReveal'

const valueProps = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Responsive Support',
        description: 'Direct access to senior technicians who understand your environment and can resolve issues quickly.'
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Proactive Security',
        description: 'We catch issues before they become breaches with continuous monitoring and vulnerability management.'
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Right-Sized Service',
        description: 'Enterprise expertise sized for organizations with 20-100 users. No overhead, no complexity.'
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        title: 'Strategic Guidance',
        description: 'Fractional CISO and IT leadership that aligns technology decisions with your business goals.'
    },
]

export function Testimonials() {
    const { ref, isVisible } = useScrollReveal()

    return (
        <section
            ref={ref}
            className={`relative py-32 bg-gradient-to-b from-[#0a0f1a] to-[#0d1424] reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
            aria-labelledby="value-heading"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
                        Why Polaris
                    </p>
                    <h2 id="value-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        What Sets Us Apart
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We're not just another IT vendor. We're senior advisors who become an extension of your team.
                    </p>
                </div>

                {/* Value Props Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {valueProps.map((prop, idx) => (
                        <div
                            key={idx}
                            className={`p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group stagger-${idx + 1}`}
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                                    {prop.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{prop.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{prop.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
