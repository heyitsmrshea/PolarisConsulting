import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: 'IT Management & Help Desk',
        description: 'Responsive remote support and ticket-based issue resolution for desktops, users, and systems.',
        features: ['Remote Support', 'Ticket System', 'User Assistance'],
        painPoints: ['Constant IT fires distracting your team', 'No dedicated IT person to call', 'Slow resolution times from current provider'],
        solutions: ['Dedicated support queue with guaranteed response times', 'Proactive monitoring to catch issues before they escalate', 'Direct access to senior technicians, not tier-1 scripts']
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        title: 'Patching & Maintenance',
        description: 'Monthly OS and application updates for servers and endpoints to keep systems stable and secure.',
        features: ['OS Updates', 'App Patches', 'Scheduled Maintenance'],
        painPoints: ['Outdated systems creating security vulnerabilities', 'Patches breaking things unexpectedly', 'No visibility into what needs updating'],
        solutions: ['Scheduled maintenance windows that respect your business hours', 'Tested patches before deployment', 'Detailed reporting on system health']
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        title: 'Microsoft 365 Administration',
        description: 'Account management, licensing optimization, and security configuration across your M365 environment.',
        features: ['Account Management', 'License Optimization', 'Security Config'],
        painPoints: ['Paying for unused licenses', 'Security settings left at defaults', 'No one knows how to use the tools effectively'],
        solutions: ['Quarterly license audits to eliminate waste', 'Security hardening based on Microsoft best practices', 'User training and adoption support']
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
        ),
        title: 'Backup & Disaster Recovery',
        description: 'Reliable data protection with verified backups and tested recovery procedures.',
        features: ['Daily Backups', 'Recovery Testing', 'DR Planning'],
        painPoints: ['Not sure if backups actually work', 'No plan for ransomware scenarios', 'Recovery would take days or weeks'],
        solutions: ['Regular backup verification and test restores', 'Documented recovery procedures', 'Air-gapped backup copies for ransomware protection']
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Fractional CISO Services',
        description: 'Executive-level cybersecurity strategy, policy development, and compliance alignment.',
        features: ['Security Strategy', 'Policy Development', 'Risk Assessment'],
        painPoints: ['No security leadership at the executive level', 'Compliance requirements you don\'t understand', 'Board asking security questions you can\'t answer'],
        solutions: ['Monthly strategic security reviews', 'Board-ready security reporting', 'Compliance roadmap and gap remediation']
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
        title: 'Procurement & Asset Management',
        description: 'Hardware/software sourcing and lifecycle tracking to simplify IT operations.',
        features: ['Vendor Management', 'Asset Tracking', 'Lifecycle Planning'],
        painPoints: ['No idea what hardware you actually have', 'Surprise end-of-life issues', 'Overpaying for software renewals'],
        solutions: ['Complete asset inventory with lifecycle tracking', 'Proactive refresh planning', 'Vendor negotiation and consolidated purchasing']
    },
]

export function Services() {
    const [expandedService, setExpandedService] = useState<number | null>(null)
    const { ref, isVisible } = useScrollReveal()

    return (
        <section
            ref={ref}
            id="services"
            className={`relative py-32 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
            aria-labelledby="services-heading"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Core Managed Services</p>
                    <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6">
                        Enterprise-Grade IT & Security
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Right-sized managed services for growing organizations—delivered by Microsoft-trained security experts.
                    </p>
                </div>

                {/* 3x2 Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className={`group relative rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border transition-all duration-500 cursor-pointer card-3d glow-border-hover stagger-${idx + 1} ${expandedService === idx
                                    ? 'border-cyan-500/40 bg-white/[0.06]'
                                    : 'border-white/5 hover:border-cyan-500/30'
                                }`}
                            onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                        >
                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 flex-shrink-0 transition-all duration-300 icon-animated ${expandedService === idx ? 'scale-110' : 'group-hover:scale-110'
                                        }`}>
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                                            <svg
                                                className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${expandedService === idx ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                                    </div>
                                </div>

                                {/* Feature tags */}
                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                                    {service.features.map((feature) => (
                                        <span key={feature} className="px-2 py-1 text-xs text-cyan-400 bg-cyan-400/10 rounded-full">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Expanded Content - Pain Points & Solutions */}
                                <div className={`accordion-content ${expandedService === idx ? 'open' : ''}`}>
                                    <div className="pt-4 mt-4 border-t border-white/5 space-y-4">
                                        {/* Pain Points */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-red-400/80 mb-2 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                                Common Pain Points
                                            </h4>
                                            <ul className="space-y-1">
                                                {service.painPoints.map((point, pIdx) => (
                                                    <li key={pIdx} className="text-xs text-gray-500 flex items-start gap-2">
                                                        <span className="text-red-400/60 mt-0.5">•</span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Solutions */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-green-400/80 mb-2 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                How We Solve It
                                            </h4>
                                            <ul className="space-y-1">
                                                {service.solutions.map((solution, sIdx) => (
                                                    <li key={sIdx} className="text-xs text-gray-400 flex items-start gap-2">
                                                        <span className="text-green-400/60 mt-0.5">✓</span>
                                                        {solution}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Security Audits callout - full width */}
                <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10 border border-cyan-500/20 glow-border-hover">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center text-cyan-400 flex-shrink-0 icon-animated">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Security Audits & Vulnerability Management</h3>
                                <p className="text-gray-400">Comprehensive security assessments identifying weaknesses before attackers do.</p>
                            </div>
                        </div>
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white whitespace-nowrap hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                        >
                            Get an Assessment
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
