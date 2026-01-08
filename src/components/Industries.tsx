export function Industries() {
    return (
        <section id="industries" className="relative py-32 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" aria-labelledby="industries-heading">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Who We Serve</p>
                    <h2 id="industries-heading" className="text-4xl md:text-5xl font-bold mb-6">
                        Built for Growing Organizations
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        We specialize in organizations with 20-100 users where security and reliability aren't optional—they're essential for growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            ),
                            title: 'Growing Companies',
                            desc: 'Businesses scaling past the point where IT can be an afterthought'
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            ),
                            title: 'Professional Services',
                            desc: 'Firms that need reliable IT without the distraction'
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            ),
                            title: 'Compliance-Conscious',
                            desc: 'Organizations where security is a business requirement'
                        },
                    ].map((industry, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                {industry.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-white mb-1">{industry.title}</h3>
                                <p className="text-sm text-gray-500">{industry.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
