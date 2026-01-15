import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
    {
        question: "What size companies do you work with?",
        answer: "We specialize in organizations with 20-100 users. This is the sweet spot where you need enterprise-grade security but can't justify a full internal IT team. Our services scale with your growth."
    },
    {
        question: "How quickly can you respond to issues?",
        answer: "Our help desk provides same-day response for standard issues, with critical security incidents addressed within 1 hour. We also provide 24/7 monitoring for managed service clients."
    },
    {
        question: "Do you require long-term contracts?",
        answer: "We offer flexible engagement models. While managed services typically work best with annual agreements, we also provide project-based work and quarterly arrangements. No hidden cancellation fees."
    },
    {
        question: "What makes you different from other MSPs?",
        answer: "Three things: Our team is Microsoft-trained with deep M365 and Azure expertise. We take a risk-first approach rather than just selling tools. And our fractional CISO service gives you executive-level security leadership at a fraction of the cost."
    },
    {
        question: "Can you help with compliance requirements?",
        answer: "Absolutely. We help clients meet HIPAA, SOC 2, and other compliance frameworks. Our security audits identify gaps, and our ongoing services help you maintain compliance year-round."
    },
    {
        question: "How does pricing work?",
        answer: "Most managed services are priced per-user per-month, making costs predictable. Project work like security audits are fixed-fee. We'll provide a detailed proposal after understanding your needs—no surprises."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const { ref, isVisible } = useScrollReveal()

    return (
        <section
            ref={ref}
            className={`relative py-32 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a] reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
            aria-labelledby="faq-heading"
        >
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
                        Common Questions
                    </p>
                    <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold mb-6">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl border transition-all duration-300 glow-border-hover ${openIndex === idx
                                    ? 'bg-white/[0.04] border-cyan-500/30'
                                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                                aria-expanded={openIndex === idx}
                            >
                                <span className="font-semibold text-white pr-4">{faq.question}</span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div className={`accordion-content ${openIndex === idx ? 'open' : ''}`}>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions */}
                <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10 border border-cyan-500/20">
                    <p className="text-gray-300 mb-4">Still have questions?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                    >
                        Talk to an Expert
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
