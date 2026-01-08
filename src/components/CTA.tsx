export function CTA() {
    return (
        <section className="relative py-32 overflow-hidden" aria-labelledby="cta-heading">
            <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Ready to Elevate Your Security?
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Schedule a consultation with a senior security advisor. No sales pitch—just a conversation about your needs.
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0a0f1a] rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
                >
                    Schedule Your Consultation
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </section>
    )
}
