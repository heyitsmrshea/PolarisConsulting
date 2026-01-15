import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
    { name: 'Microsoft Partner', icon: '🏆' },
    { name: 'CMMC Ready', icon: '🔐' },
]

export function TrustBar() {
    const { ref, isVisible } = useScrollReveal()

    return (
        <section
            ref={ref}
            className={`py-12 border-y border-white/5 dark:border-white/5 bg-[#0a0f1a]/50 dark:bg-[#0a0f1a]/50 overflow-hidden reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Certifications Row */}
                <div className="flex flex-wrap justify-center items-center gap-6">
                    <span className="text-sm text-gray-500 uppercase tracking-widest">
                        Credentials:
                    </span>
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 hover:border-cyan-500/30 transition-colors"
                        >
                            <span className="text-lg">{cert.icon}</span>
                            <span className="text-sm font-medium text-gray-300 dark:text-gray-300">{cert.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
