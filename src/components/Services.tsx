const services = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: 'IT Management & Help Desk',
        description: 'Responsive remote support and ticket-based issue resolution for desktops, users, and systems.',
        features: ['Remote Support', 'Ticket System', 'User Assistance'],
        details: {
            painPoints: ['Slow response times from current provider', 'No dedicated support contact', 'Issues piling up without resolution'],
            solutions: ['Direct access to senior technicians', 'Same-day response SLAs', 'Proactive issue prevention']
        }
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        title: 'Patching & Maintenance',
        description: 'Monthly OS and application updates for servers and endpoints to keep systems stable and secure.',
        features: ['OS Updates', 'App Patches', 'Scheduled Maintenance'],
        details: {
            painPoints: ['Outdated systems vulnerable to attacks', 'Unplanned downtime from failed updates', 'No visibility into patch status'],
            solutions: ['Scheduled maintenance windows', 'Tested patches before deployment', 'Comprehensive reporting']
        }
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        title: 'Microsoft 365 Administration',
        description: 'Account management, licensing optimization, and security configuration across your M365 environment.',
        features: ['Account Management', 'License Optimization', 'Security Config'],
        details: {
            painPoints: ['Overpaying for unused licenses', 'Security settings not configured properly', 'No expertise managing Teams/SharePoint'],
            solutions: ['License audits and right-sizing', 'Security baseline implementation', 'Expert M365 administration']
        }
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
        ),
        title: 'Backup & Disaster Recovery',
        description: 'Reliable data protection with verified backups and tested recovery procedures.',
        features: ['Daily Backups', 'Recovery Testing', 'DR Planning'],
        details: {
            painPoints: ['No backup verification—hope it works', 'No recovery plan if ransomware hits', 'Unknown recovery time objectives'],
            solutions: ['Regular restore testing', 'Documented recovery procedures', 'Defined RTO/RPO targets']
        }
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Fractional CISO Services',
        description: 'Executive-level cybersecurity strategy, policy development, and compliance alignment without full-time cost.',
        features: ['Security Strategy', 'Policy Development', 'Risk Assessment'],
        details: {
            painPoints: ['No security leadership for board questions', 'Policies outdated or nonexistent', 'Unclear risk posture'],
            solutions: ['Quarterly security reviews', 'Policy frameworks tailored to your size', 'Board-ready reporting']
        }
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
        title: 'Procurement & Asset Management',
        description: 'Hardware/software sourcing and lifecycle tracking to simplify IT operations.',
        features: ['Vendor Management', 'Asset Tracking', 'Lifecycle Planning'],
        details: {
            painPoints: ['No idea what hardware you own', 'Overpaying for software renewals', 'End-of-life equipment creating risk'],
            solutions: ['Complete asset inventory', 'Vendor negotiation support', 'Refresh planning and budgeting']
        }
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Security Audits & Vulnerability Management',
        description: 'Comprehensive security assessments identifying weaknesses before attackers do.',
        features: ['Vulnerability Scans', 'Penetration Testing', 'Remediation Guidance'],
        details: {
            painPoints: ['No visibility into security gaps', 'Compliance requirements demand audits', 'Previous assessments gathered dust'],
            solutions: ['Actionable findings with priorities', 'Remediation support included', 'Ongoing vulnerability monitoring']
        }
    },
]

import { useState } from 'react'

export function Services() {
    const [expandedService, setExpandedService] = useState<number | null>(null)

    return (
        <section id="services" className="relative py-32" aria-labelledby="services-heading">
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className={`group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border transition-all duration-500 cursor-pointer ${expandedService === idx
                                    ? 'border-cyan-500/50 bg-white/[0.06] md:col-span-2 lg:col-span-2'
                                    : 'border-white/5 hover:border-cyan-500/30 hover:-translate-y-1'
                                }`}
                            onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 flex-shrink-0 transition-transform duration-300 ${expandedService === idx ? 'scale-110' : 'group-hover:scale-110'
                                    }`}>
                                    {service.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.features.map((feature) => (
                                            <span key={feature} className="px-2 py-1 text-xs text-cyan-400 bg-cyan-400/10 rounded-full">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Expanded Details */}
                                    {expandedService === idx && (
                                        <div className="mt-6 pt-6 border-t border-white/10 animate-fade-in-up grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">Pain Points We Solve</h4>
                                                <ul className="space-y-2">
                                                    {service.details.painPoints.map((point, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                            <span className="text-red-400 mt-1">✕</span>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">Our Solution</h4>
                                                <ul className="space-y-2">
                                                    {service.details.solutions.map((solution, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                            <span className="text-green-400 mt-1">✓</span>
                                                            {solution}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Expand indicator */}
                            <div className="absolute top-4 right-4 text-gray-500">
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${expandedService === idx ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
