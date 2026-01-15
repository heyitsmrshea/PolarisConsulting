import { useScrollReveal } from '../hooks/useScrollReveal'

export function Partners() {
    const { ref, isVisible } = useScrollReveal()

    return (
        <section
            ref={ref}
            className={`relative py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0d1424] reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
            aria-labelledby="partners-heading"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Strategic Partnership</p>
                    <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold mb-6">
                        Enterprise AI That Works
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group card-3d glow-border-hover">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" aria-hidden="true" />

                        <div className="relative grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center icon-animated">
                                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Ava by DataRM</h3>
                                        <p className="text-sm text-purple-400">Enterprise AI Partner</p>
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    We've partnered with DataRM to bring enterprise AI to our clients. Ava lives inside your Azure tenant,
                                    uses your existing Entra ID for permissions, and connects to the apps you already use—Salesforce, Jira,
                                    Microsoft 365, and more. No shadow auth, no data leaving your environment.
                                </p>

                                <a
                                    href="https://datarm.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    Learn more at datarm.ai
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>

                            <div className="relative">
                                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <div className="text-center mb-4">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" aria-hidden="true" />
                                            Governed in Azure
                                        </span>
                                    </div>

                                    <div className="space-y-4 text-sm">
                                        {[
                                            'Lives in your Azure tenant',
                                            'Uses existing Entra ID permissions',
                                            'Takes action in Salesforce, Jira, M365',
                                            'No data leaves your environment'
                                        ].map((item, idx) => (
                                            <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] stagger-${idx + 1}`}>
                                                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
