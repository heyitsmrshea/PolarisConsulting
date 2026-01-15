import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We start with a comprehensive assessment of your current IT infrastructure, security posture, and business goals.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        details: ['Environment audit', 'Risk assessment', 'Gap analysis', 'Priority mapping']
    },
    {
        number: '02',
        title: 'Strategy',
        description: 'We design a customized roadmap aligned with your budget, timeline, and risk tolerance.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        details: ['Solution design', 'Budget planning', 'Timeline creation', 'Success metrics']
    },
    {
        number: '03',
        title: 'Implementation',
        description: 'Our team executes the plan with minimal disruption to your daily operations.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        details: ['Staged rollout', 'User training', 'System migration', 'Quality assurance']
    },
    {
        number: '04',
        title: 'Ongoing Support',
        description: 'Continuous monitoring, maintenance, and strategic guidance to keep you protected.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        details: ['24/7 monitoring', 'Regular updates', 'Quarterly reviews', 'Proactive alerts']
    }
]

export function Process() {
    const { ref, isVisible } = useScrollReveal()

    return (
        <section
            ref={ref}
            className={`relative py-32 bg-[#0a0f1a] reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
            aria-labelledby="process-heading"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
                        Our Approach
                    </p>
                    <h2 id="process-heading" className="text-4xl md:text-5xl font-bold mb-6">
                        How We Work
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A proven methodology that delivers results without disrupting your business.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent hidden lg:block" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className={`relative group reveal-hidden stagger-${idx + 1} ${isVisible ? 'reveal-visible' : ''}`}
                            >
                                {/* Step Card */}
                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 card-3d glow-border-hover h-full">
                                    {/* Number Badge */}
                                    <div className="relative mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300 icon-animated">
                                            {step.icon}
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>

                                    {/* Details */}
                                    <ul className="space-y-2">
                                        {step.details.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex items-center gap-2 text-xs text-gray-500">
                                                <svg className="w-4 h-4 text-cyan-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
