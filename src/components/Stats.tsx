import { useCountUp } from '../hooks/useCountUp'

export function Stats() {
    const stat1 = useCountUp(150, 2000)
    const stat2 = useCountUp(100, 2000)
    const stat3 = useCountUp(99, 2000)
    const stat4 = useCountUp(15, 2000)

    const stats = [
        { value: stat1.count, suffix: '+', label: 'Organizations Protected', ref: stat1.ref },
        { value: stat2.count, suffix: '%', label: 'First-Attempt SOC 2 Pass', ref: stat2.ref },
        { value: stat3.count, suffix: '.9%', label: 'Uptime Guaranteed', ref: stat3.ref },
        { value: stat4.count, suffix: 'min', label: 'Avg Response Time', ref: stat4.ref },
    ]

    return (
        <section className="relative py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0d1424]" aria-label="Company statistics">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
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
    )
}
