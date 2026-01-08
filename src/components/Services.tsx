const services = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: 'IT Management & Help Desk',
        description: 'Responsive remote support and ticket-based issue resolution for desktops, users, and systems.',
        features: ['Remote Support', 'Ticket System', 'User Assistance']
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        title: 'Patching & Maintenance',
        description: 'Monthly OS and application updates for servers and endpoints to keep systems stable and secure.',
        features: ['OS Updates', 'App Patches', 'Scheduled Maintenance']
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        title: 'Microsoft 365 Administration',
        description: 'Account management, licensing optimization, and security configuration across your M365 environment.',
        features: ['Account Management', 'License Optimization', 'Security Config']
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
        ),
        title: 'Backup & Disaster Recovery',
        description: 'Reliable data protection with verified backups and tested recovery procedures.',
        features: ['Daily Backups', 'Recovery Testing', 'DR Planning']
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Fractional CISO Services',
        description: 'Executive-level cybersecurity strategy, policy development, and compliance alignment.',
        features: ['Security Strategy', 'Policy Development', 'Risk Assessment']
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
        title: 'Procurement & Asset Management',
        description: 'Hardware/software sourcing and lifecycle tracking to simplify IT operations.',
        features: ['Vendor Management', 'Asset Tracking', 'Lifecycle Planning']
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

                {/* 3x2 Grid - Always balanced */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                            onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
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
                        </div>
                    ))}
                </div>

                {/* Security Audits callout - full width */}
                <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10 border border-cyan-500/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
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
