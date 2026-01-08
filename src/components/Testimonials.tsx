const testimonials = [
    {
        quote: "Polaris helped us pass our SOC 2 audit on the first attempt. Their expertise saved us months of work and gave our clients confidence.",
        author: "Sarah Chen",
        role: "CTO",
        company: "HealthTech Startup"
    },
    {
        quote: "We finally have enterprise-grade security without the enterprise price tag. Their team feels like an extension of our own.",
        author: "Michael Torres",
        role: "VP of Operations",
        company: "Regional Law Firm"
    },
    {
        quote: "After a ransomware scare with our previous provider, Polaris rebuilt our security from the ground up. We sleep better now.",
        author: "Jennifer Walsh",
        role: "Executive Director",
        company: "Healthcare Nonprofit"
    },
]

export function Testimonials() {
    return (
        <section id="results" className="relative py-32" aria-labelledby="testimonials-heading">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Client Results</p>
                    <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-6">
                        Trusted by Leaders
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <article
                            key={idx}
                            className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 hover:border-cyan-500/20 transition-all duration-500"
                        >
                            <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-gray-300 mb-8 leading-relaxed italic">"{testimonial.quote}"</blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-lg" aria-hidden="true">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.author}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
