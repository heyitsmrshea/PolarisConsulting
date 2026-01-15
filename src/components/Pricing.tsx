import { useScrollReveal } from '../hooks/useScrollReveal'

const mspFeatures = [
    'Remote & on-site help desk',
    'Microsoft 365 administration',
    'Hardware & software procurement',
    'Network monitoring & management',
    'Security patching & updates',
    'Backup management',
    'Vendor coordination',
    'IT strategy & planning',
]

const projectTypes = [
    { name: 'Firewall Deployment', desc: 'Setup, configuration, and optimization' },
    { name: 'Intune Deployment', desc: 'MDM rollout and policy configuration' },
    { name: 'Network Infrastructure', desc: 'Switches, access points, cabling' },
    { name: 'Microsoft 365 Migration', desc: 'Email, SharePoint, Teams setup' },
    { name: 'Security Assessments', desc: 'Vulnerability scans and recommendations' },
    { name: 'Compliance Readiness', desc: 'CMMC, HIPAA, SOC 2 preparation' },
]

export function Pricing() {
    const { ref, isVisible } = useScrollReveal()

    return (
        <section
            ref={ref}
            id="pricing"
            className={`relative py-32 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
            aria-labelledby="pricing-heading"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
                        How We Work
                    </p>
                    <h2 id="pricing-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white">
                        Two Ways to Engage
                    </h2>
                    <p className="text-gray-400 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Whether you need ongoing IT management or help with a specific project, we have a model that fits.
                    </p>
                </div>

                {/* Two Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* MSP Model Card */}
                    <div className="relative p-8 rounded-2xl bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/10">
                        <div className="absolute -top-4 left-6">
                            <span className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold uppercase tracking-wider">
                                Ongoing Support
                            </span>
                        </div>

                        <div className="mb-8 pt-4">
                            <h3 className="text-2xl font-bold mb-2 text-white dark:text-white">Managed Services</h3>
                            <p className="text-gray-400 dark:text-gray-400">Complete IT management for your organization</p>
                        </div>

                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl font-bold text-white dark:text-white">Monthly</span>
                            <span className="text-gray-400 dark:text-gray-400">retainer</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {mspFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 dark:text-gray-300">
                                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            className="block w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-center text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/25"
                        >
                            Request a Quote
                        </a>

                        <p className="mt-4 text-xs text-gray-500 text-center">
                            Pricing based on users and environment complexity
                        </p>
                    </div>

                    {/* Projects Card */}
                    <div className="relative p-8 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] border border-white/10 dark:border-white/10 hover:border-cyan-500/30 transition-all">
                        <div className="absolute -top-4 left-6">
                            <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-xs font-semibold uppercase tracking-wider">
                                One-Time Projects
                            </span>
                        </div>

                        <div className="mb-8 pt-4">
                            <h3 className="text-2xl font-bold mb-2 text-white dark:text-white">Project-Based</h3>
                            <p className="text-gray-400 dark:text-gray-400">Expert help for specific initiatives</p>
                        </div>

                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl font-bold text-white dark:text-white">Hourly</span>
                            <span className="text-gray-400 dark:text-gray-400">engagement</span>
                        </div>

                        <div className="space-y-4 mb-8">
                            {projectTypes.map((project, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <div>
                                        <span className="text-sm font-medium text-gray-200 dark:text-gray-200">{project.name}</span>
                                        <p className="text-xs text-gray-500">{project.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="block w-full py-4 border border-white/20 dark:border-white/20 rounded-xl font-semibold text-center text-white dark:text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5"
                        >
                            Discuss Your Project
                        </a>

                        <p className="mt-4 text-xs text-gray-500 text-center">
                            Fixed-bid options available for defined scope
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 dark:text-gray-400 mb-4">
                        Not sure which model is right for you?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                        Schedule a free consultation
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
